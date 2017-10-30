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
      align-content: center;
      padding: 10px;
    }
  }
</style>

<template>
  <section>
    <header>
      <el-button type="primary" icon="plus" size="large" @click="showCreateModal = true">添加图片</el-button>
    </header>
    <div class="main-view">
      <div class="loop" v-for="(item, index) in filter">
        <img :src="$resize(item.url, { width: 280, height: 173 })" alt="loop">
        <div class="control">
          <el-switch on-text="" off-text="" v-model="item.use" @change="handleSwitch(item, index)"></el-switch>
        </div>
      </div>
    </div>
    <v-modal v-model="showCreateModal"
             :header-text="'首页轮播图上传'"
             @submit="saveLoop">
      <el-form :model="createForm">
        <el-col :span="11">
          <el-form-item label="番剧id" :label-width="'60px'">
            <el-input name="bangumi_id"
                      v-model.trim="createForm.bangumiId"
                      auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="1">
          <el-form-item label="用户id" :label-width="'60px'">
            <el-input name="user_id"
                      v-model.trim="createForm.userId"
                      auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="21">
          <el-form-item label="资源" :label-width="'60px'">
            <el-input name="url"
                      v-model.trim="createForm.url"
                      v-validate="{
                        rules: 'required',
                        scope: 'create-loop'
                      }"
                      auto-complete="off"
            ><template slot="prepend">https://cdn.riuir.com/</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="2" :offset="1">
          <el-form-item>
            <el-upload
              action="http://up.qiniu.com"
              :data="uploadHeaders"
              :show-file-list="false"
              :on-success="handleCreateLoopSuccess"
              :before-upload="beforeUpload">
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
        </el-col>
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
    userId: '',
    bangumiId: ''
  }
  export default {
    name: 'v-page-image-loop',
    computed: {
      filter () {
        const begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
        return _.orderBy(this.list, 'created_at', 'desc').slice(begin, begin + this.pagination.pageSize)
      }
    },
    data () {
      return {
        list: [],
        pagination: {
          totalPage: 0,
          pageSize: 12,
          curPage: 1
        },
        showCreateModal: false,
        createForm: defaultCreateForm,
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
          this.pagination.totalPage = data.length
          this.list = data.map(item => {
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
        this.uploadHeaders.key = `loop/${new Date().getTime()}/${Math.random().toString(36).substring(3, 6)}`;
        return isFormat && isLt2M;
      },
      handleCreateLoopSuccess(res, file) {
        this.createForm.url = res.key
      },
      saveLoop() {
        this.$validator.validateAll('create-loop').then((result) => {
          if (result) {
            this.$http.post('/image/loop/create', {
              url: this.createForm.url,
              bangumi_id: this.createForm.bangumi_id,
              user_id: this.createForm.user_id
            }).then((id) => {
              this.list.unshift({
                id: id,
                url: this.createForm.url,
                bangumi_id: this.createForm.bangumi_id,
                user_id: this.createForm.user_id,
                use: true
              });
              this.createForm = defaultCreateForm;
              this.$message.success('操作成功');
            }).catch(() => {
              this.$message.error('操作失败');
            });
          } else {
            this.$message.warning('请先上传图片');
          }
        })
      }
    }
  }
</script>
