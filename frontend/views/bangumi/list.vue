<template>
  <section>
    <header>
      <router-link to="/bangumi/create">
        <el-button type="primary" icon="plus" size="large">创建番剧</el-button>
      </router-link>
    </header>
    <el-table
      :data="filter"
      class="main-view"
      v-loading="loading"
      border>
      <el-table-column label="番名">
        <template slot-scope="scope">
          <a :href="$href(`bangumi/${scope.row.id}`)" target="_blank">{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column width="300" label="操作">
        <template slot-scope="scope">
          <router-link :to="`/bangumi/edit/${scope.row.id}`">
            <el-button size="small" type="primary" icon="edit">编辑</el-button>
          </router-link>
          <el-button size="small"
                     icon="upload2"
                     type="primary"
                     @click="handleUpdate(scope.row.id)"
                     v-if="scope.row.id !== scope.row.collection_id"
          >更新</el-button>
          <el-button size="small"
                     icon="delete"
                     :type="scope.row.deleted_at ? 'warning' : 'danger'"
                     @click="handleDelete(scope.$index, scope.row)"
          >{{ scope.row.deleted_at ? '恢复' : '删除' }}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <footer>
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="pagination.curPage"
        :page-sizes="[20, 50, 100]"
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
  export default {
    computed: {
      filter () {
        const begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
        return this.list.slice(begin, begin + this.pagination.pageSize)
      }
    },
    data () {
      return {
        list: [],
        pagination: {
          totalPage: 0,
          pageSize: 50,
          curPage: 1
        },
        loading: true
      }
    },
    created () {
      this.getBangumis()
    },
    methods: {
      getBangumis () {
        this.$http.get('/bangumi/list').then((data) => {
          this.list = data
          this.pagination.totalPage =  Math.ceil(this.list.length / this.pagination.pageSize)
          this.loading = false
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
      handleUpdate(id) {
        this.$prompt('请输入视频id', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^([1-9][0-9]*)$/,
          inputErrorMessage: 'id 格式不正确'
        }).then(({ value }) => {
          this.$http.post('/bangumi/release', {
            bangumi_id: id,
            video_id: value
          }).then(() => {
            this.$message.success('更新成功');
          }).catch(() => {
            this.$message.error('更新失败');
          })
        }).catch(() => {
        });
      },
      handleDelete(index, bangumi) {
        this.$confirm('确认要执行该操作吗?', '提示').then(() => {
          this.$http.post('/bangumi/delete', {
            id: bangumi.id,
            isDeleted: !!bangumi.deleted_at
          }).then(() => {
            this.$message.success('操作成功');
            this.list[index + (this.pagination.curPage - 1) * this.pagination.pageSize].deleted_at = !bangumi.deleted_at
          }).catch(() => {
            this.$message.error('操作失败');
          })
        }).catch(() => {
        })
      }
    }
  }
</script>
