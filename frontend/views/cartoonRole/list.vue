<template>
  <section>
    <header>
      <router-link to="/cartoonRole/create">
        <el-button type="primary" icon="plus" size="large">新建角色</el-button>
      </router-link>
    </header>
    <el-table
      :data="filter"
      class="main-view"
      v-loading="loading"
      border
      highlight-current-row>
      <el-table-column
        label="名称">
        <template slot-scope="scope">
          <a :href="$href(`bangumi/${scope.row.bangumi_id}/role/${scope.row.id}`)" target="_blank">
            <img :src="$resize(`${$CDNPrefix}${scope.row.avatar}`, { width: 100 })" alt="">
            {{ scope.row.name }}
          </a>
        </template>
      </el-table-column>
      <el-table-column
        label="所属番剧">
        <template slot-scope="scope">
          <a :href="$href(`bangumi/${scope.row.bangumi_id}`)" target="_blank">{{ computeBangumi(scope.row.bangumi_id) }}</a>
        </template>
      </el-table-column>
      <el-table-column
        width="300"
        prop="intro"
        label="简介">
      </el-table-column>
      <el-table-column
        sortable
        width="110"
        prop="fans_count"
        label="粉丝数">
      </el-table-column>
      <el-table-column
        sortable
        width="110"
        prop="star_count"
        label="喜欢数">
      </el-table-column>
      <el-table-column
        width="200"
        label="操作">
        <template slot-scope="scope">
          <router-link :to="`/cartoonRole/edit/${scope.row.id}`">
            <el-button size="small" type="primary">编辑</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <footer>
      <el-pagination
        layout="total, prev, pager, next, jumper"
        :current-page="pagination.curPage"
        :page-size="pagination.pageSize"
        :pageCount="pagination.totalPage"
        :total="pagination.total"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </footer>
  </section>
</template>

<script>
  export default {
    computed: {
      filter () {
        const begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
        return this.list.slice(begin, begin + this.pagination.pageSize)
      }
    },
    data () {
      return {
        loading: true,
        list: [],
        bangumis: [],
        pagination: {
          totalPage: 0,
          pageSize: 15,
          curPage: 1,
          total: 0,
          maxPage: 1
        }
      }
    },
    created () {
      this.getList()
    },
    methods: {
      getList () {
        this.$http.get('/cartoonRole/list', {
          params: {
            take: this.pagination.pageSize
          }
        }).then((data) => {
          this.list = data.role
          this.bangumis = data.bangumi
          this.pagination.totalPage =  Math.ceil(data.total / this.pagination.pageSize)
          this.pagination.total = data.total
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
          this.$http.get('/cartoonRole/list', {
            params: {
              seenIds: this.list.map(_ => parseInt(_.id, 10)),
              take: this.pagination.pageSize * (val - this.pagination.maxPage)
            }
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
      computeBangumi (bangumiId) {
        let result = '未知番剧'
        this.bangumis.forEach(item => {
          if (item.id === bangumiId) {
            result = item.name
          }
        })
        return result
      }
    }
  }
</script>
