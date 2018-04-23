<template>
  <section v-loading="loading">
    <header>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: '番剧列表' }">番剧列表</el-breadcrumb-item>
        <el-breadcrumb-item>{{ id ? form.name : '创建番剧' }}</el-breadcrumb-item>
      </el-breadcrumb>
    </header>
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="main-view">
      <el-form-item label="创建合集" v-if="!id">
        <el-switch v-model="form.isCollection"></el-switch>
      </el-form-item>
      <el-form-item label="番剧名称" prop="name">
        <el-col :span="8">
          <el-input v-model.trim="form.name" placeholder="中文名"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="番剧别名" prop="alias" required>
        <el-input type="textarea"
                  v-model.trim="form.alias"
                  placeholder="中文名、日文名、英文名... 名字之间以逗号分隔"
        ></el-input>
      </el-form-item>
      <el-form-item label="连载周期" v-if="!form.isCollection">
        <el-select v-model="form.released_at" placeholder="请选择">
          <el-option
            v-for="item in releaseWeekly"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="外站视频">
        <el-switch v-model="form.others_site_video"></el-switch>
      </el-form-item>
      <el-form-item label="已完结">
        <el-switch v-model="form.end"></el-switch>
      </el-form-item>
      <el-form-item label="上映日期" prop="published_at" v-if="!form.isCollection" required>
        <el-date-picker v-model="form.published_at" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="番剧标签" prop="tags" required>
        <el-select v-model="form.tags" style="width: 100%" multiple placeholder="可多选，至少选择一个">
          <el-option
            v-for="item in tags"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属专题" v-if="!form.isCollection">
        <el-select v-model="form.collection_id" placeholder="请选择">
          <el-option
            v-for="item in collections"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="番剧头像" prop="avatar" required>
        <el-col :span="16">
          <el-input v-model.trim="form.avatar" :disabled="true" auto-complete="off">
            <template slot="prepend">https://image.calibur.tv/</template>
          </el-input>
        </el-col>
        <el-col :span="2" :offset="1">
          <el-form-item>
            <el-upload
              action="http://up.qiniu.com"
              :data="uploadHeaders"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <el-button type="text">
                <i class="el-icon-plus"></i>
                上传
              </el-button>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="2" v-if="form.avatar">
          <el-popover
            ref="popoverAvatar"
            placement="left"
            width="200"
            trigger="hover">
            <img :src="`${$CDNPrefix}${form.avatar}`" alt="">
          </el-popover>
          <a type="text" :href="`${$CDNPrefix}${form.avatar}`" target="_blank" v-popover:popoverAvatar>
            <i class="el-icon-view"></i>&nbsp;预览
          </a>
        </el-col>
      </el-form-item>
      <el-form-item label="番剧背景" prop="banner" required>
        <el-col :span="16">
          <el-input v-model.trim="form.banner" :disabled="true" auto-complete="off">
            <template slot="prepend">https://image.calibur.tv/</template>
          </el-input>
        </el-col>
        <el-col :span="2" :offset="1">
          <el-form-item>
            <el-upload
              action="http://up.qiniu.com"
              :data="uploadHeaders"
              :show-file-list="false"
              :on-success="handleBannerSuccess"
              :before-upload="beforeBannerUpload">
              <el-button type="text">
                <i class="el-icon-plus"></i>
                上传
              </el-button>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="2" v-if="form.banner">
          <el-popover
            ref="popoverBanner"
            placement="left"
            width="200"
            trigger="hover">
            <img :src="`${$CDNPrefix}${form.banner}`" alt="">
          </el-popover>
          <a type="text" :href="`${$CDNPrefix}${form.banner}`" target="_blank" v-popover:popoverBanner>
            <i class="el-icon-view"></i>&nbsp;预览
          </a>
        </el-col>
      </el-form-item>
      <el-form-item label="季度信息" prop="season" v-if="!form.isCollection">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入番剧季度信息，JSON格式，包含 part，time，name, re 字段"
          v-model.trim="form.season">
        </el-input>
      </el-form-item>
      <el-form-item v-if="!form.isCollection">
        <el-collapse>
          <el-collapse-item title="季度信息介绍：">
            <div>1. 这个字段可为空</div>
            <div>2. part 是多个数组（区间），代表季度的集数，比如第一季是1 ~ 12, 第二季是 13 ~ 24，那么 part = [0, 12, 24]</div>
            <div>3. 第一个 0 代表从第一集开始，12 - 0 = 12，24 -12 = 12，代表第一季有12集，第二季有12集</div>
            <div>4. time 和 name 代表该季度的上映日期和名称，如果没有特殊名称，就填写'第一季、第二季'</div>
            <div>5. 假设 part 有 N 个，那么 time 和 name 就有 N - 1 个，因此 part 至少是两个</div>
            <div>6. part 必须是升序排列的，从 0 开始，当番剧未完结时，最后一位是 -1</div>
            <div>7. re 代表每个季度之间的集数是否重排，如果是 1 则重拍，如果是 0 或不填则不重排</div>
            <div>9. re 也可以和 name 是一个数组，但它的长度必须和 name 一样，并且每一项都是 0 或 1</div>
            <div>9. 关于 JSON，你可能需要在这里进行格式校验：<a href="http://www.json.cn/" target="_blank">JSON格式化工具</a></div>
          </el-collapse-item>
        </el-collapse>
      </el-form-item>
      <el-form-item label="番剧简介" prop="summary">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入番剧简介，最多250字，纯文本不支持各种换行符"
          v-model.trim="form.summary">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-col :span="3" :offset="21">
          <el-button type="primary" @click="submitForm">{{ id ? '确认编辑' : '立即创建' }}</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
  export default {
    computed: {
      id () {
        return this.$route.params.id || 0
      }
    },
    data () {
      const validateAlias = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入番剧别名'));
        } else if (value.split(/,|，/).length <= 1) {
          callback(new Error('请输入多个别名，用逗号分隔'));
        } else {
          callback();
        }
      };
      const validateSeason = (rule, value, callback) => {
        if (value === '') {
          callback();
        } else {
          try {
            const season = JSON.parse(value);
            const name = season.name;
            const part = season.part;
            const time = season.time;
            if (!name) {
              callback(new Error('缺少季度名称'));
            }
            if (!part) {
              callback(new Error('缺少季度集数'));
            }
            if (!time) {
              callback(new Error('缺少季度日期'));
            }
            if (!Array.isArray(time)) {
              callback(new Error('日期必须是数组（区间）'));
            }
            if (!Array.isArray(part)) {
              callback(new Error('集数必须是数组（区间）'));
            }
            if (!Array.isArray(name)) {
              callback(new Error('名称必须是数组（区间）'));
            }
            if (!time.every(eif => /^\d{4}\.\d{1,2}$/.test(eif))) {
              callback(new Error('时间的格式应精确到月份，年与月用点号隔开，如 2018.10 或 2018.2'));
            }
            if (!part.every(item => typeof item === 'number')) {
              callback(new Error('集数必须都是数字'));
            }
            if (time.length !== name.length) {
              callback(new Error('名称的个数必须和日期的个数相同'));
            }
            if (part.length < 2) {
              callback(new Error('集数至少是两位数'));
            }
            if (part.length !== time.length + 1) {
              callback(new Error('集数的个数要比时间和名称的个数多一个'));
            }
            if (!part.every((item, index, arr) => {
                if (index) {
                  if (index === arr.length - 1) {
                    return item === -1 || item > arr[index - 1];
                  } else {
                    return item > arr[index - 1];
                  }
                } else {
                  return item === 0;
                }
              })) {
              callback(new Error('part 要从 0 开始，升序排列，最后一项可为 -1'));
            }
            if (!season.re) {
              callback();
              return
            }
            if (typeof season.re !== 'number' && !Array.isArray(season.re)) {
              callback(new Error('re 必须是数字 0 和 1 或者一个数组'));
              return;
            }
            if (typeof season.re === 'number' && (season.re !== 0 && season.re !== 1)) {
              callback(new Error('re 必须是数字 0 和 1 或者一个数组'));
              return;
            }
            if (Array.isArray(season.re)) {
              if (season.re.length !== time.length) {
                callback(new Error('re 的个数要和时间的个数相同'));
                return;
              }
              if (season.re.some(_ => { return _ !== 0 && _ !== 1 })) {
                callback(new Error('re 的每一项都必须是 0 或 1'));
                return;
              }
            }
            callback();
          } catch (e) {
            callback(new Error('不是标准的JSON格式'));
          }
        }
      }
      const validatePublish = (rule, value, callback) => {
        if (value === 0 || value === '') {
          callback(new Error('请选择上映日期'))
        } else {
          callback()
        }
      }
      return {
        loading: !!this.id,
        bangumi: null,
        tags: [],
        collections: [],
        releaseWeekly: [
          {
            id: 0,
            name: '不连载'
          },
          {
            id: 1,
            name: '周一'
          },
          {
            id: 2,
            name: '周二'
          },
          {
            id: 3,
            name: '周三'
          },
          {
            id: 4,
            name: '周四'
          },
          {
            id: 5,
            name: '周五'
          },
          {
            id: 6,
            name: '周六'
          },
          {
            id: 7,
            name: '周日'
          }
        ],
        form: {
          name: '',
          alias: '',
          released_at: 0,
          published_at: '',
          tags: [],
          collection_id: 0,
          avatar: '',
          banner: '',
          season: '',
          summary: '',
          others_site_video: false,
          isCollection: false,
          end: false
        },
        rules: {
          name: [
            { required: true, message: '请输入番剧名称', trigger: 'blur' }
          ],
          alias: [
            { validator: validateAlias, trigger: 'blur' }
          ],
          published_at: [
            { validator: validatePublish, trigger: 'change' }
          ],
          tags: [
            { type: 'array', required: true, message: '至少要选择一个标签', trigger: 'change' }
          ],
          season: [
            { validator: validateSeason, trigger: 'blur' }
          ],
          summary: [
            { required: true, message: '简介不能为空', trigger: 'blur' },
            { min: 1, max: 250, message: '最多250字', trigger: 'blur' }
          ]
        },
        uploadHeaders: {
          token: '',
          key: ''
        }
      }
    },
    created () {
      this.getBangumiById()
      this.getUptoken()
      this.getCollections()
      this.getTags()
    },
    methods: {
      getBangumiById () {
        if (!this.id) {
          return
        }

        this.$http.get('/bangumi/item', {
          params: {
            id: this.id
          }
        }).then(data => {
          this.bangumi = data
          this.form = data
          this.loading = false
        })
      },
      getCollections() {
        this.$http.get('/bangumi/collections').then((data) => {
          this.collections = data.concat({
            id: 0,
            name: '无',
            title: '无'
          })
        })
      },
      getTags() {
        this.$http.get('/bangumi/tags').then((data) => {
          this.tags = data
        })
      },
      getUptoken() {
        this.$http.get('/image/uptoken').then((token) => {
          this.uploadHeaders.token = token
        })
      },
      beforeAvatarUpload(file) {
        const isFormat = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 1;

        if (!isFormat) {
          this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 1MB!');
        }
        if (isFormat && isLt2M) {
          this.$message.info('上传中，请稍候...');
        }

        this.uploadHeaders.key = `bangumi/avatar/${new Date().getTime()}-${Math.random().toString(36).substring(3, 6)}.${file.type.split('/').pop()}`;
        return isFormat && isLt2M;
      },
      beforeBannerUpload(file) {
        const isFormat = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt1M = file.size / 1024 / 1024 < 2;

        if (!isFormat) {
          this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
        }
        if (!isLt1M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        if (isFormat && isLt1M) {
          this.$message.info('上传中，请稍候...');
        }

        this.uploadHeaders.key = `bangumi/banner/${new Date().getTime()}-${Math.random().toString(36).substring(3, 6)}.${file.type.split('/').pop()}`;
        return isFormat && isLt1M;
      },
      handleAvatarSuccess(res, file) {
        this.$message.success('上传成功');
        this.form.avatar = res.key
      },
      handleBannerSuccess(res, file) {
        this.$message.success('上传成功');
        this.form.banner = res.key
      },
      submitForm() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            const api = this.id ? '/bangumi/edit' : '/bangumi/create'
            this.$http.post(api, Object.assign({}, this.form, {
              published_at: new Date(this.form.published_at).getTime() / 1000
            })).then(() => {
              this.$message.success('操作成功');
            }).catch(() => {
              this.$message.error('操作失败');
            })
          }
        });
      }
    }
  }
</script>
