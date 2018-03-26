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
            <img :src="$resize(scope.row.avatar, { width: 100 })" alt="">
            <span>{{ scope.row.nickname }}</span>
          </a>
        </template>
      </el-table-column>
      <el-table-column
        prop="signature"
        label="签名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="coin_count"
        label="金币数">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="success" @click="recover(scope.$index, scope.row)" v-if="scope.row.deleted_at">恢复</el-button>
          <el-button type="danger" @click="block(scope.$index, scope.row)" v-else>封禁</el-button>
        </template>
      </el-table-column>
    </el-table>
    <footer>
      <el-pagination
        layout="total, prev, pager, next"
        :current-page="pagination.curPage"
        :page-size="pagination.pageSize"
        :pageCount="pagination.totalPage"
        :total="list.length"
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
        list: []
      }
    },
    created () {
      this.getUserList()
    },
    methods: {
      getUserList () {
        this.$http.get('/user/list', {
          take: this.pagination.pageSize
        }).then((data) => {
          this.list = data
          this.loading = false
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
            seenIds: this.list.map(_ => parseInt(_.id, 10)),
            take: this.pagination.pageSize * (val - this.pagination.maxPage)
          }).then((data) => {
            this.list = this.list.concat(data)
            this.pagination.curPage = val
            this.pagination.maxPage = val
            this.loading = false
          }).catch(() => {
            this.$message.error('加载失败，请重试');
            this.loading = false
          })
        }
      },
      recover (index, user) {
        this.$http.post('/user/recover', {
          id: user.id
        }).then(() => {
          this.$message.success('操作成功');
          user.deleted_at = null
        }).catch(() => {
          this.$message.error('操作失败，请重试');
        })
      },
      block (index, user) {
        this.$http.post('/user/block', {
          id: user.id
        }).then(() => {
          this.$message.success('操作成功');
          user.deleted_at = Date.now()
        }).catch(() => {
          this.$message.error('操作失败，请重试');
        })
      }
    }
  }
</script>
