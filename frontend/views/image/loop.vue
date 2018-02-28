<style lang="scss" scoped="">
  .loop {
    width: 280px;
    height: 173px;
    float: left;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    transition-duration: .2s;
    cursor: pointer;
    overflow: hidden;
    position: relative;

    &:hover {
      box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1), 0 4px 8px 0 rgba(0,0,0,0.2);
    }

    img {
      width: 100%;
      height: 100%;
    }

    .control {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 40px;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.2) 35%, rgba(0, 0, 0, 0.4) 65%, rgba(0, 0, 0, 0.6));
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      padding: 10px;
    }
  }

  #another {
    display: none;
  }
</style>

<template>
  <section>
    <header>
      <el-button type="primary" icon="plus" size="large" @click="showCreateModal = true">添加图片</el-button>
    </header>
    <div class="main-view">
      <img alt="another"
           v-if="createForm.url"
           :src="`${$CDNPrefix}${createForm.url}?imageMogr2/auto-orient/strip/gravity/Center/crop/435x300`"
           @load="getImageGrayLevel"
           ref="another"
           crossOrigin="anonymous"
           id="another"/>
      <div class="loop" v-for="(item, index) in filter" :key="item.id">
        <img :src="$resize(item.url, { width: 280, height: 173 })" alt="loop">
        <div class="control">
          <el-switch v-model="item.use" @change="handleSwitch(item, index)"></el-switch>
        </div>
      </div>
    </div>
    <v-modal v-model="showCreateModal"
             header-text="首页轮播图上传"
             @submit="saveLoop">
      <el-form :model="createForm" label-width="100px" ref="form">
        <el-form-item label="资源"
                      prop="url"
                      :rules="[
            { required: true, message: '资源链接不能为空', trigger: 'change' }
          ]">
          <el-col :span="19">
            <el-input name="url" v-model.trim="createForm.url" :disabled="true">
              <template slot="prepend">https://image.calibur.tv/</template>
            </el-input>
          </el-col>
          <el-col :span="2" :offset="1">
            <el-form-item>
              <el-upload
                action="http://up.qiniu.com"
                :data="uploadHeaders"
                :show-file-list="false"
                :on-success="handleCreateLoopSuccess"
                :before-upload="beforeUpload">
                <el-button type="text">
                  <i class="el-icon-plus"></i>
                  上传
                </el-button>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="2" v-if="createForm.url">
            <el-popover
              ref="popoverImage"
              placement="left"
              width="200"
              trigger="hover">
              <img :src="`${$CDNPrefix}${createForm.url}`" alt="">
            </el-popover>
            <a type="text" :href="`${$CDNPrefix}${createForm.url}`" target="_blank" v-popover:popoverImage>
              <i class="el-icon-view"></i>&nbsp;预览
            </a>
          </el-col>
        </el-form-item>
        <el-form-item label="番剧"
                      prop="bangumi_id"
                      :rules="[
            { type: 'number', required: true, message: '番剧不能为空', trigger: 'change' }
          ]">
          <el-select v-model="createForm.bangumi_id" placeholder="请选择">
            <el-option
              v-for="item in bangumis"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户id"
                      prop="user_id"
                      :rules="[
            { required: true, message: '用户id不能为空', trigger: 'blur' }
          ]">
          <el-input v-model.trim="createForm.user_id"></el-input>
        </el-form-item>
      </el-form>
    </v-modal>
    <footer>
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="pagination.curPage"
        :page-sizes="[12, 24, 48]"
        :page-size="pagination.pageSize"
        :pageCount="pagination.totalPage"
        :total="list.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </footer>
  </section>
</template>

<script>
  const defaultCreateForm = {
    url: '',
    user_id: '',
    bangumi_id: '',
    gray: 0
  }
  export default {
    computed: {
      filter () {
        const begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
        return _.orderBy(this.list, 'created_at', 'desc').slice(begin, begin + this.pagination.pageSize)
      }
    },
    data () {
      return {
        list: [],
        bangumis: [],
        pagination: {
          totalPage: 0,
          pageSize: 12,
          curPage: 1
        },
        showCreateModal: false,
        createForm: Object.assign({}, defaultCreateForm),
        uploadHeaders: {
          token: '',
          key: ''
        }
      }
    },
    created () {
      this.getLoops()
      this.getUptoken()
    },
    methods: {
      getLoops() {
        this.$http.get('/image/loop/list').then((data) => {
          this.pagination.totalPage = data.loop.length
          this.bangumis = data.bangumi
          this.list = data.loop.map(item => {
            item.use = !item.deleted_at
            return item
          })
        })
      },
      getUptoken() {
        this.$http.get('/image/uptoken').then((token) => {
          this.uploadHeaders.token = token
        })
      },
      handleSizeChange(val) {
        this.pagination.pageSize = val
      },
      handleCurrentChange(val) {
        this.pagination.curPage = val
      },
      handleSwitch(item, index) {
        this.$confirm('确认要执行该操作吗?', '提示').then(() => {
          this.$http.post('/image/loop/toggle', {
            id: item.id,
            isDelete: !item.deleted_at
          }).then(() => {
            this.$message.success('操作成功');
          }).catch(() => {
            this.$message.error('操作失败');
            this.list[index + (this.pagination.curPage - 1) * this.pagination.pageSize].use = !item.deleted_at
          })
        }).catch(() => {
          this.list[index + (this.pagination.curPage - 1) * this.pagination.pageSize].use = !item.deleted_at
        })
      },
      beforeUpload(file) {
        const isFormat = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isFormat) {
          this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        this.uploadHeaders.key = `loop/${new Date().getTime()}-${Math.random().toString(36).substring(3, 6)}.${file.type.split('/').pop()}`;
        return isFormat && isLt2M;
      },
      handleCreateLoopSuccess(res, file) {
        this.createForm.url = res.key
      },
      saveLoop() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$http.post('/image/loop/create', this.createForm).then((id) => {
              this.list.unshift({
                id: id,
                use: true,
                bangumi_id: this.createForm.bangumi_id,
                user_id: this.createForm.user_id,
                url: `${this.$CDNPrefix}${this.createForm.url}`,
                gray: this.createForm.gray
              });
              this.showCreateModal = false;
              this.$message.success('操作成功');
              this.$nextTick(() => {
                this.createForm = Object.assign({}, defaultCreateForm);
              });
            }).catch(() => {
              this.$message.error('操作失败');
            });
          } else {
            return false;
          }
        });
      },
      getImageGrayLevel() {
        this.createForm.gray = this.$imageGrayLevel(this.$refs.another, 100)
      }
    }
  }
</script>
