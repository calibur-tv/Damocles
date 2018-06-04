<style lang="scss" scoped="">
  .user {
    text-align: center;

    img {
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
    }

    span {
      vertical-align: middle;
    }
  }
</style>

<template>
  <div>
    <header>
      <el-row>
        <el-col :span="4">
          <el-button
            type="primary"
            icon="plus"
            size="large"
            @click="createNewFakerUser"
          >新建运营号</el-button>
        </el-col>
      </el-row>
    </header>
    <el-table
      class="main-view"
      :data="filter"
      v-loading="loading"
      border
      stripe
    >
      <el-table-column label="用户">
        <template slot-scope="scope">
          <a class="user" :href="$href(`user/${scope.row.zone}`)" target="_blank">
            <span>{{ scope.row.nickname }}</span>
          </a>
        </template>
      </el-table-column>
      <el-table-column
        prop="phone"
        label="账号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="coin_count"
        label="金币数">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" @click="newLife(scope.$index, scope.row)">账号认领</el-button>
        </template>
      </el-table-column>
    </el-table>
    <footer>
      <el-pagination
        layout="total, prev, pager, next"
        :current-page="pagination.curPage"
        :page-size="pagination.pageSize"
        :pageCount="pagination.totalPage"
        :total="pagination.total"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'UserList',
    computed: {
      filter () {
        const begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
        return this.list.slice(begin, begin + this.pagination.pageSize)
      }
    },
    data () {
      return {
        pagination: {
          totalPage: 0,
          pageSize: 30,
          curPage: 1,
          total: 0,
          maxPage: 1
        },
        loading: true,
        list: [],
        toggleCreateModal: false,
        createForm: {
          nickname: ''
        }
      }
    },
    created () {
      this.getUserList()
    },
    methods: {
      getUserList () {
        this.$http.get('/user/fakerUsers', {
          params: {
            take: this.pagination.pageSize
          }
        }).then((data) => {
          this.list = data.list
          this.loading = false
          this.pagination.total = data.total
          this.pagination.totalPage =  Math.ceil(data.total / this.pagination.pageSize)
        })
      },
      handleCurrentChange(val) {
        if (val <= this.pagination.maxPage) {
          this.pagination.curPage = val
          return
        }
        if (val > this.pagination.maxPage) {
          this.loading = true
          this.$http.get('/user/list', {
            params: {
              seenIds: this.list.map(_ => parseInt(_.id, 10)),
              take: this.pagination.pageSize * (val - this.pagination.maxPage)
            }
          }).then((data) => {
            this.list = this.list.concat(data.list)
            this.pagination.curPage = val
            this.pagination.maxPage = val
            this.loading = false
          }).catch(() => {
            this.$message.error('加载失败，请重试');
            this.loading = false
          })
        }
      },
      createNewFakerUser () {
        this.$prompt('请输入要创建的用户昵称', '提示', {
          confirmButtonText: '提交',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          const length = value.replace(/([\u4e00-\u9fa5])/g, 'aa').trim().length
          if (!(/^([\u4e00-\u9fa5]|[a-z0-9])+$/i.test(value))) {
            this.$message.error('名字不符合规范')
            return
          }
          if (length > 14 || length < 2) {
            this.$message.error('名字长度不符')
            return
          }
          this.$http.post('/user/createFaker', {
            nickname: value,
            phone: Date.now().toString().slice(0, -2)
          }).then((resp) => {
            this.list.unshift(resp.data)
          }).catch((err) => {
            this.$message.error('操作失败')
            console.log(err)
          })
        }).catch(() => {})
      },
      newLife (index, user) {
        this.$prompt('请输入转让者的手机号', '提示', {
          confirmButtonText: '提交',
          cancelButtonText: '取消',
          inputPattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
          inputErrorMessage: '手机格式不正确'
        }).then(({ value }) => {
          this.$http.post('/user/rebornFakerUser', {
            id: user.id,
            phone: value
          }).then(() => {
            this.list.splice(index, 1)
            this.$message.success('操作成功')
          }).catch((err) => {
            this.$message.error(err.data)
            console.log(err)
          })
        }).catch(() => {})
      }
    }
  }
</script>
