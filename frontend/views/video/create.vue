<style lang="scss" scoped>
  .video-preview {
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;

    .image {
      width: 300px;
      height: 225px;
    }
  }
</style>

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
      <el-form-item
        label="番剧"
        prop="bangumiId"
        :rules="[{ type: 'number', required: true, message: '请选择视频所属番剧', trigger: 'change' }]"
      >
        <el-col :span="20">
          <el-select
            v-model="form.bangumiId"
            :disabled="saver.bangumi"
            placeholder="请选择"
            filterable
          >
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
                       :disabled="saver.bangumi"
            >确认</el-button>
          </el-tooltip>
        </el-col>
      </el-form-item>
      <el-form-item label="番剧别名"
                    prop="prefix"
                    :rules="[{ required: true, message: '番剧英文名不能为空', trigger: 'blur' }]">
        <el-col :span="20">
          <el-input v-model.trim="form.prefix"
                    placeholder="番剧的英文名"
                    :disabled="saver.prefix"
          ></el-input>
        </el-col>
        <el-col :span="3" :offset="1">
          <el-tooltip effect="dark" content="确认后不可修改" placement="top">
            <el-button @click="validateAndSavePrefix"
                       type="primary"
                       :disabled="saver.prefix"
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
                           :disabled="saver.parts"
          ></el-input-number>
          &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input-number v-model="form.parts[1]"
                           :min="form.parts[0]"
                           label="描述文字"
                           :disabled="saver.parts"
          ></el-input-number>
        </el-col>
        <el-col :span="3" :offset="1">
          <el-tooltip effect="dark" content="确认后不可修改" placement="top">
            <el-button @click="validateAndSaveParts"
                       type="primary"
                       :disabled="saver.parts"
            >确认</el-button>
          </el-tooltip>
        </el-col>
      </el-form-item>
      <el-form-item label="封面格式">
        <el-col :span="20">
          <el-select v-model="form.suffix" :disabled="saver.suffix" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3" :offset="1">
          <el-tooltip effect="dark" content="确认后不可修改" placement="top">
            <el-button @click="handleSaverSuffix"
                       type="primary"
                       :disabled="saver.suffix"
            >确认</el-button>
          </el-tooltip>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-alert title="大部分视频封面图的格式是相同的，部分不相同的格式可以在之后重置" type="info"></el-alert>
      </el-form-item>
      <el-form-item label="视频格式">
        <el-col :span="20">
          <el-select v-model="form.format" :disabled="saver.format" placeholder="请选择">
            <el-option
              v-for="item in videoFormat"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="3" :offset="1">
          <el-tooltip effect="dark" content="确认后不可修改" placement="top">
            <el-button @click="handleSaverFormat"
                       type="primary"
                       :disabled="saver.format"
            >确认</el-button>
          </el-tooltip>
        </el-col>
      </el-form-item>
      <el-form-item label="每集名称"
                    prop="names"
                    :rules="[{ required: true, message: '内容不能为空', trigger: 'blur' }]">
        <el-col :span="20">
          <el-input v-model.trim="form.names"
                    :disabled="saver.names"
                    type="textarea"
                    :rows="10"
                    placeholder="每集番剧的名称，每行一个，不要有空行"
          ></el-input>
        </el-col>
        <el-col :span="3" :offset="1">
          <el-tooltip effect="dark" content="确认后不可修改" placement="top">
            <el-button @click="validateAndSaveNames"
                       type="primary"
                       :disabled="saver.names"
            >确认</el-button>
          </el-tooltip>
        </el-col>
      </el-form-item>
      <el-form-item label="自建资源">
        <el-switch v-model="form.haveSelfResource"></el-switch>
      </el-form-item>
      <el-form-item label="外链资源" prop="videos">
        <el-col :span="20">
          <el-input v-model.trim="form.videos"
                    type="textarea"
                    :disabled="saver.videos"
                    :rows="10"
                    placeholder="如果有自建资源，则外链资源可为空，如果某一集没有外链资源，则那一行可为空，如果不为空，则必须为合法链接，如果没有自建资源，要求就和标题一样"
          ></el-input>
        </el-col>
        <el-col :span="3" :offset="1">
          <el-tooltip effect="dark" content="确认后不可修改" placement="top">
            <el-button @click="validateAndSaveUrls"
                       type="primary"
                       :disabled="saver.videos"
            >确认</el-button>
          </el-tooltip>
        </el-col>
      </el-form-item>
      <template v-if="saver.bangumi &&
                      saver.prefix &&
                      saver.names &&
                      saver.suffix &&
                      saver.parts &&
                      saver.format &&
                      saver.videos">
        <el-form-item label="视频预览">
          <el-card class="video-preview" v-for="(part, index) in (form.parts[1] - form.parts[0] + 1)" :key="part">
            <img :src="$resize($CDNPrefix + form.posters[index], { width: 600, height: 450 })" class="image">
            <div style="padding: 14px;">
              <span>【第 {{ index + form.parts[0] }} 集】{{ form.titles[index] }}</span>
              <div class="bottom clearfix">
                <a v-if="form.haveSelfResource" :href="`https://image.calibur.tv/bangumi/${form.prefix}/video/720/${index + form.parts[0]}.${form.format}`" target="_blank">查看视频资源</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a v-if="form.urls[index]" :href="form.urls[index]" target="_blank">查看外链资源</a>
              </div>
            </div>
          </el-card>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">确认并上传</el-button>
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
  </section>
</template>

<script>
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
        options: ['jpg', 'jpeg', 'png', 'JPG', 'JPEG', 'PNG'],
        videoFormat: ['mp4', 'flv', 'Mp4', 'Flv'],
        form: {
          bangumiId: '',
          parts: [1, 1],
          prefix: '',
          suffix: 'jpg',
          format: 'mp4',
          names: '',
          videos: '',
          uploaded: false,
          titles: [],
          urls: [],
          posters: [],
          haveSelfResource: true
        },
        saver: {
          bangumi: false,
          prefix: false,
          suffix: false,
          format: false,
          videos: false,
          parts: false,
          names: false
        },
        list: {}
      }
    },
    created () {
      this.getBangumis()
    },
    methods: {
      getBangumis () {
        this.$http.get('/bangumi/list').then((data) => {
          this.bangumis = data
          this.loading = false
        })
      },
      validateAndSaveBangumiId () {
        this.$refs.form.validateField('bangumiId', (error) => {
          if (!error) {
            this.saver.bangumi = true
          }
        })
      },
      validateAndSavePrefix () {
        this.$refs.form.validateField('prefix', (error) => {
          if (!error) {
            this.saver.prefix = true
          }
        })
      },
      validateAndSaveParts () {
        this.$refs.form.validateField('parts', (error) => {
          if (!error) {
            this.saver.parts = true
          }
        })
      },
      handleSaverFormat () {
        this.saver.format = true;
      },
      handleSaverSuffix () {
        const arr = [];
        const parts = this.form.parts;
        const suffix = this.form.suffix;
        for (let i= parts[0]; i <= parts[1]; i++) {
          arr.push(`bangumi/${this.form.prefix}/poster/${i}.${suffix}`)
        }
        this.form.posters = arr;
        this.saver.suffix = true;
      },
      validateAndSaveNames () {
        const names = this.form.names;
        if (!names) {
          this.$message.error('标题不能为空');
          return;
        }
        const parts = this.form.parts;
        const length = parts[1] - parts[0] + 1;
        const titles = names.split('\n')
        const result = [];
        if (titles.length !== length) {
          this.$message.error('标题个数不对');
          return;
        }
        let goOut = false;
        titles.forEach(title => {
          if (!title || title.length > 30) {
            goOut = true;
          }
          result.push(title.trim())
        });
        if (goOut) {
          this.$message.error('每一个标题都不能为空，且不能超过30字');
          return;
        }
        this.form.titles = result
        this.saver.names = true;
      },
      validateAndSaveUrls () {
        const videos = this.form.videos;
        if (!videos) {
          if (this.form.haveSelfResource) {
            this.saver.videos = true
          } else {
            this.$message.error('资源链接不能为空');
          }
          return
        }
        const parts = this.form.parts;
        const length = parts[1] - parts[0] + 1;
        const arr = videos.split('\n')
        if (this.form.haveSelfResource) {
          if (arr.length > length) {
            this.$message.error('外链视频的个数大于视频的总数');
            return;
          }
        } else {
          if (arr.length !== length) {
            this.$message.error('资源个数');
            return;
          }
        }
        let goOut = false;
        const result = [];
        arr.forEach(video => {
          if (video && !(video.startsWith('http://') || video.startsWith('https://'))) {
            goOut = true;
          }
          result.push(video.trim().split('?').shift());
        })
        if (goOut) {
          this.$message.error('存在不合法的链接');
          return;
        }
        this.form.urls = result;
        this.saver.videos = true;
      },
      resetForm() {
        this.saver = {
          bangumi: false,
          prefix: false,
          suffix: false,
          videos: false,
          format: false,
          parts: false,
          names: false
        }
      },
      changePosterSuffix(index) {
        this.$prompt('输入图片后缀', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          if (this.options.indexOf(value) === -1) {
            this.$message.error('非法的图片后缀名');
            return;
          }
          this.form.posters[index] = `${this.form.posters[index].split('.').shift()}.${value}`;
        }).catch(() => {});
      },
      submitForm() {
        const arr = [];
        const begin = this.form.parts[0];
        for (let i = begin; i <= this.form.parts[1]; i++) {
          const idx = [i - begin];
          arr.push({
            bangumiId: this.form.bangumiId,
            part: i,
            name: this.form.titles[idx],
            url: this.form.urls[idx] || '',
            poster: this.form.posters[idx],
            resource: this.form.haveSelfResource ? {
              "video": {
                "720": {
                  "useLyc": false,
                  "src": `bangumi/${this.form.prefix}/video/720/${i}.${this.form.format}`
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
            } : null
          })
        }
        this.$http.post('video/save', arr).then(() => {
          this.$message.success('操作成功');
          this.$refs.form.resetFields();
          this.resetForm();
        }).catch((err) => {
          console.log(err);
          this.$message.error('保存失败，请联系管理员');
        });
      }
    }
  }
</script>
