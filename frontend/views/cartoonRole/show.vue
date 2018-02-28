<template>
  <section v-loading="loading">
    <header>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: '角色列表' }">角色列表</el-breadcrumb-item>
        <el-breadcrumb-item>{{ id ? form.name : '创建角色' }}</el-breadcrumb-item>
      </el-breadcrumb>
    </header>
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="main-view">
      <el-form-item label="角色名称" prop="name" required>
        <el-col :span="8">
          <el-input v-model.trim="form.name" placeholder="中文名"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="角色别名" prop="alias" required>
        <el-input type="textarea"
                  v-model.trim="form.alias"
                  placeholder="中文名、日文名、英文名... 名字之间以逗号分隔"
        ></el-input>
      </el-form-item>
      <el-form-item label="所属番剧" prop="bangumi_id">
        <el-select v-model="form.bangumi_id" placeholder="请选择" required>
          <el-option
            v-for="item in bangumis"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="角色头像" prop="avatar" required>
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
            width="100"
            trigger="hover">
            <img :src="$resize($CDNPrefix + form.avatar, { width: 100 })" alt="">
          </el-popover>
          <a type="text" :href="`${$CDNPrefix}${form.avatar}`" target="_blank" v-popover:popoverAvatar>
            <i class="el-icon-view"></i>&nbsp;预览
          </a>
        </el-col>
      </el-form-item>
      <el-form-item label="角色简介" prop="intro" required>
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入角色简介，最多250字，纯文本不支持各种换行符"
          v-model.trim="form.intro">
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
      return {
        loading: !!this.id,
        bangumis: [],
        form: {
          name: '',
          alias: '',
          bangumi_id: '',
          avatar: '',
          intro: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入角色名称', trigger: 'blur' }
          ],
          avatar: [
            { required: true, message: '头像是必填', trigger: 'change' }
          ],
          alias: [
            { validator: validateAlias, trigger: 'blur' }
          ],
          intro: [
            { required: true, message: '简介不能为空', trigger: 'blur' },
            { min: 1, max: 250, message: '最多250字', trigger: 'blur' }
          ],
          bangumi_id: [
            { required: true, message: '番剧是必选', trigger: 'blur' }
          ]
        },
        uploadHeaders: {
          token: '',
          key: ''
        }
      }
    },
    created () {
      this.getRoleById()
      this.getUptoken()
      this.getBangumis()
    },
    methods: {
      getRoleById () {
        if (!this.id) {
          return
        }

        this.$http.get('/cartoonRole/show', {
          params: {
            id: this.id
          }
        }).then(data => {
          this.form = data
          this.loading = false
        })
      },
      getBangumis () {
        this.$http.get('/bangumi/list').then((data) => {
          this.bangumis = data
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

        this.uploadHeaders.key = `bangumi/role/${new Date().getTime()}-${Math.random().toString(36).substring(3, 6)}.${file.type.split('/').pop()}`;
        return isFormat && isLt2M;
      },
      handleAvatarSuccess(res, file) {
        this.$message.success('上传成功');
        this.form.avatar = res.key
      },
      submitForm() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            const api = this.id ? '/cartoonRole/edit' : '/cartoonRole/create'
            this.$http.post(api, this.form).then(() => {
              this.$message.success('操作成功');
              if (!this.id) {
                this.$refs.form.resetFields()
              }
            }).catch(() => {
              this.$message.error('操作失败');
            })
          }
        });
      }
    }
  }
</script>
