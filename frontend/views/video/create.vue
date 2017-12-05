<template>
  <section v-loading="loading">
    <header>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: '视频列表' }">视频列表</el-breadcrumb-item>
        <el-breadcrumb-item>新建视频</el-breadcrumb-item>
      </el-breadcrumb>
    </header>
    <el-form :model="form" ref="form" label-width="100px" class="main-view">
      <el-form-item label="番剧"
                    prop="bangumiId"
                    :rules="[{ type: 'number', required: true, message: '请选择视频所属番剧', trigger: 'change' }]">
        <el-col :span="20">
          <el-select v-model="form.bangumiId"
                     :disabled="form.saveBangumiId"
                     placeholder="请选择">
            <el-option
              v-for="item in bangumis"
              :key="item.id"
              :disabled="!!item.deleted_at"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3" :offset="1">
          <el-tooltip effect="dark" content="确认后不可修改" placement="top">
            <el-button type="primary"
                       @click="validateAndSaveBangumiId"
                       :disabled="form.saveBangumiId"
            >确认</el-button>
          </el-tooltip>
        </el-col>
      </el-form-item>
      <el-form-item label="资源前缀"
                    prop="prefix"
                    :rules="[{ required: true, message: '番剧英文名不能为空', trigger: 'blur' }]">
      <el-col :span="20">
          <el-input v-model.trim="form.prefix"
                    placeholder="番剧的英文名"
                    :disabled="form.savePrefix"
          ></el-input>
        </el-col>
        <el-col :span="3" :offset="1">
          <el-tooltip effect="dark" content="确认后不可修改" placement="top">
            <el-button @click="validateAndSavePrefix"
                       type="primary"
                       :disabled="form.savePrefix"
            >确认</el-button>
          </el-tooltip>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-alert title="番剧的资源前缀统一设为番剧的英文名，英文之间用短横线 ' - ' 隔开，纯小写，不知道名字的请百度" type="info"></el-alert>
      </el-form-item>
      <el-form-item label="集数"
                    prop="parts"
                    :rules="[{ validator: validatePart, trigger: 'change' }]"
                    required>
        <el-col :span="20">
          <el-input-number v-model="form.parts[0]"
                           :min="1"
                           label="描述文字"
                           :disabled="form.saveParts"
          ></el-input-number>
          &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input-number v-model="form.parts[1]"
                           :min="form.parts[0]"
                           label="描述文字"
                           :disabled="form.saveParts"
          ></el-input-number>
        </el-col>
        <el-col :span="3" :offset="1">
          <el-tooltip effect="dark" content="确认后不可修改" placement="top">
            <el-button @click="validateAndSaveParts"
                       type="primary"
                       :disabled="form.saveParts"
            >确认</el-button>
          </el-tooltip>
        </el-col>
      </el-form-item>
      <template v-if="form.saveParts && form.saveBangumiId && form.savePrefix">
        <el-form-item label="视频">
          <el-upload action="http://up.qiniu.com"
                     multiple
                     ref="uploader"
                     :data="uploadHeaders"
                     :on-preview="handlePreview"
                     :on-error="handleError"
                     :on-remove="handleRemove"
                     :on-success="handleSuccess"
                     :on-exceed="handleExceed"
                     :limit="form.parts[1] - form.parts[0] + 1"
                     :auto-upload="false"
                     :before-upload="beforeVideoUpload"
                     :file-list="form.videos">
            <el-button slot="trigger" size="small" type="primary">点击添加视频</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-alert title="提交之前要点击每个视频为其添加信息" type="info"></el-alert>
        </el-form-item>
        <el-form-item label="是否转码">
          <el-switch v-model="needTranslate"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-alert title="视频播放只支持 mp4 格式，如果上传的视频不是 mp4 格式的，请勾选转码，并联系管理员" type="info"></el-alert>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">上传并提交</el-button>
        </el-form-item>
      </template>
      <template v-else>
        <el-form-item>
          <el-alert title="确认上述所有信息后，自动进行下一步，确认后不可修改" type="warning"></el-alert>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </template>
    </el-form>
    <v-modal v-model="modal.show"
             @submit="saveVideoInfo"
             :header-text="`为视频《${modal.file.name}》补充必要信息`">
      <el-form :model="modal.form"
               ref="videoForm"
               label-width="100px">
        <el-form-item label="集数">
          <el-select v-model="modal.form.part" placeholder="请选择">
            <el-option
              v-for="part in modal.optionParts"
              :key="part"
              :label="part"
              :value="part">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="视频名称"
                      prop="name"
                      required>
          <el-input v-model.trim="modal.form.name"></el-input>
        </el-form-item>
        <el-form-item label="视频封面" prop="poster" required>
          <el-col :span="19">
            <el-input v-model.trim="modal.form.poster" :disabled="true" placeholder="点击右侧按钮上传封面">
              <template slot="prepend">Https://image.calibur.tv/</template>
            </el-input>
          </el-col>
          <el-col :span="2" :offset="1">
            <el-form-item>
              <el-upload
                action="http://up.qiniu.com"
                :data="uploadHeaders"
                :show-file-list="false"
                :on-success="handlePosterSuccess"
                :before-upload="beforePosterUpload">
                <el-button type="text">
                  <i class="el-icon-plus"></i>
                  上传
                </el-button>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="2" v-if="modal.form.poster">
            <el-popover
              ref="popoverPoster"
              placement="left"
              width="200"
              trigger="hover">
              <img :src="`${$CDNPrefix}${modal.form.poster}`" alt="">
            </el-popover>
            <a type="text" :href="`${$CDNPrefix}${modal.form.poster}`" target="_blank" v-popover:popoverPoster>
              <i class="el-icon-view"></i>&nbsp;预览
            </a>
          </el-col>
        </el-form-item>
        <el-form-item label="外站资源"
                      :rules="[{ validator: validateLink, trigger: 'change' }]"
                      prop="url">
          <el-input v-model.trim="modal.form.url" placeholder="其它网站该视频的资源地址，可选"></el-input>
        </el-form-item>
      </el-form>
    </v-modal>
  </section>
</template>

<script>
  const emptyModalForm = {
    part: undefined,
    poster: '',
    name: '',
    url: '',
    resource: ''
  }

  export default {
    data () {
      return {
        loading: false,
        bangumis: [],
        validatePart: (rule, value, callback) => {
          if (value.length !== 2) {
            callback(new Error('集数格式不对'))
          } else if (value[0] < 1) {
            callback(new Error('集数不能小于1'))
          } else if (value[0] > value[1]) {
            callback(new Error('集数必须是正确的区间'))
          } else {
            callback()
          }
        },
        validateLink: (rule, value, callback) => {
          if (typeof value !== 'string') {
            callback(new Error('连接必须是字符串'))
          }
          if (value === '' || value.startsWith('http')) {
            callback()
          } else {
            callback(new Error('连接不正确'))
          }
        },
        form: {
          bangumiId: '',
          parts: [1, 1],
          prefix: '',
          saveBangumiId: false,
          savePrefix: false,
          saveParts: false,
          videos: [],
          uploaded: false
        },
        uploadHeaders: {
          token: ''
        },
        modal: {
          show: false,
          file: {},
          form: Object.assign({}, emptyModalForm),
          optionParts: [],
          selectedParts: []
        },
        list: {},
        needTranslate: false
      }
    },
    watch: {
      'form.parts' (val) {
        this.computeOptionParts(val)
      }
    },
    created () {
      this.getBangumis()
      this.getUptoken()
    },
    methods: {
      computeOptionParts (val) {
        const begin = val[0]
        const end = val[1]
        const arr = []
        for (let i = begin; i <= end; i++) {
          arr.push(i)
        }
        this.modal.optionParts = arr.filter(item => this.modal.selectedParts.indexOf(item) === -1)
      },
      getBangumis () {
        this.$http.get('/bangumi/list').then((data) => {
          this.bangumis = data
          this.loading = false
        })
      },
      getUptoken() {
        this.$http.get('/image/uptoken').then((token) => {
          this.uploadHeaders.token = token
        })
      },
      validateAndSaveBangumiId () {
        this.$refs.form.validateField('bangumiId', (error) => {
          if (!error) {
            this.form.saveBangumiId = true
          }
        })
      },
      validateAndSavePrefix () {
        this.$refs.form.validateField('prefix', (error) => {
          if (!error) {
            this.form.savePrefix = true
          }
        })
      },
      validateAndSaveParts () {
        this.$refs.form.validateField('parts', (error) => {
          if (!error) {
            this.form.saveParts = true
          }
        })
      },
      beforeVideoUpload (file) {
        if (file.type.match('video') === null) {
          this.$notify.error({
            title: '提示',
            message: `视频《${file.name}》的格式不正确`,
            duration: 0
          })
          return false
        }
        this.uploadHeaders.key = `bangumi/${this.form.prefix}/video/${new Date().getTime()}${file.name}`;
        return true
      },
      handleSuccess (res, file) {
        const video = this.list[file.uid]
        Object.assign(video, {
          id: file.uid,
          resource: {
            "video": {
              "720": {
                "useLyc": false,
                "src": res.key
              },
              "1080": {
                "useLyc": false,
                "src": ""
              }
            },
            "lyric": {
              "zh": "",
              "en": ""
            }
          },
          deleted_at: this.needTranslate ? moment().format('YYYY-MM-DD H:m:s') : null
        })
        this.list[file.uid] = Object.assign({}, video)
        this.$message.success(`视频《${video.name}》已上传成功，正在保存`)
        this.saveVideoToServer(video)
      },
      handlePreview (file) {
        if (this.list[file.uid]) {
          this.modal.form = Object.assign({}, this.list[file.uid])
        } else {
          this.modal.form = Object.assign({}, emptyModalForm)
        }
        this.modal.file = file
        this.computeOptionParts(this.form.parts)
        this.modal.show = true
      },
      handleError (err, file) {

      },
      handleRemove (file) {
        const cache = this.list[file.uid]
        if (cache) {
          this.modal.optionParts.push(cache.part)
          delete this.list[file.uid]
        }
      },
      handleExceed () {
        this.$message.error(`最多可上传 ${this.form.parts[1] - this.form.parts[0] + 1} 集视频`);
      },
      beforePosterUpload(file) {
        const isFormat = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt1M = file.size / 1024 / 1024 < 1;

        if (!isFormat) {
          this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
        }
        if (!isLt1M) {
          this.$message.error('上传头像图片大小不能超过 1MB!');
        }
        if (isFormat && isLt1M) {
          this.$message.info('上传中，请稍候...');
        }

        this.uploadHeaders.key = `bangumi/${this.form.prefix}/poster/${new Date().getTime()}${file.name}`;
        return isFormat && isLt1M;
      },
      handlePosterSuccess(res, file) {
        this.$message.success('上传成功');
        this.modal.form.poster = res.key
      },
      saveVideoInfo () {
        this.$refs.videoForm.validate(valid => {
          if (valid) {
            this.list[this.modal.file.uid] = Object.assign({
              bangumiId: this.form.bangumiId,
              success: false
            }, this.modal.form)
            this.modal.selectedParts.push(this.modal.form.part)
            this.$message.success('保存成功');
            this.modal.show = false
          } else {
            return false
          }
        })
      },
      saveVideoToServer (video) {
        this.$http.post('/video/upload', video).then(() => {
          this.$notify.success({
            title: '提示',
            message: `视频《${video.name}》保存成功！`,
            duration: 0
          })
          this.list[video.id].success = true
        }).catch(err => {
          this.$notify.error({
            title: '提示',
            message: `视频《${video.name}》保存失败，请联系管理员`,
            duration: 0
          })
          console.log(err)
        })
      },
      resetForm() {
        Object.assign(this.form, {
          saveBangumiId: false,
          savePrefix: false,
          saveParts: false
        })
        this.$refs.form.resetFields();
      },
      submitForm() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            let validate = true
            const keys = Object.keys(this.list)
            const length = this.form.parts[1] - this.form.parts[0] + 1
            if (!keys.length) {
              this.$message.error('请先选择视频并填写视频信息');
              return
            }
            if (keys.length < length) {
              this.$message.error('视频个数不够');
              return
            }
            keys.forEach(uid => {
              const video = this.list[uid]
              if (!video.part) {
                this.$message.error(`视频《${video.name}》集数缺失`);
                validate = false
                return
              }
              if (!video.poster) {
                this.$message.error(`视频《${video.name}》封面缺失`);
                validate = false
                return
              }
              if (!video.name) {
                this.$message.error(`视频《${video.name}》名称缺失`);
                validate = false
              }
            })
            if (validate) {
              if (!this.form.uploaded) {
                this.form.uploaded = true
                this.$refs.uploader.submit()
              } else {
                Object.keys(this.list).forEach(uid => {
                  const video = this.list[uid]
                  if (!video.success) {
                    this.saveVideoToServer(video)
                  }
                })
              }
            }
          } else {
            return false;
          }
        });
      }
    }
  }
</script>
