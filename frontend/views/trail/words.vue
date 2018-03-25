<style lang="scss" scoped="">

</style>

<template>
  <section>
    <header>
      <el-button type="primary" icon="plus" size="large" @click="showEditModal = true; isDelete = false">添加高危词</el-button>
      <el-button type="primary" icon="plus" size="large" @click="showEditModal = true; isDelete = true">删除高危词</el-button>
    </header>
    <el-table
      :data="filter"
      class="main-view"
      v-loading="loading"
      border>
      <el-table-column label="值">
        <template slot-scope="scope">
          <span>{{ scope.row }}</span>
        </template>
      </el-table-column>
      <el-table-column width="200" label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="primary" icon="edit" @click="delWords(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <footer>
      <el-pagination
        layout="total, prev, pager, next, jumper"
        :current-page="pagination.curPage"
        :page-size="pagination.pageSize"
        :pageCount="pagination.totalPage"
        :total="list.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </footer>
    <v-modal
      v-model="showEditModal"
      :header-text="isDelete ? '删除高危词' : '添加高危词'"
      @submit="addWords">
      <el-input
        type="textarea"
        :rows="20"
        placeholder="一行一个，不留空行"
        v-model="words">
      </el-input>
    </v-modal>
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
        loading: true,
        showEditModal: false,
        words: '',
        pagination: {
          totalPage: 0,
          pageSize: 1000,
          curPage: 1
        },
        isDelete: false
      }
    },
    created () {
      this.getWords();
    },
    methods: {
      getWords() {
        this.$http.get('/trial/blackwords/list').then((res) => {
          this.list = res;
          this.loading = false;
        })
      },
      handleSizeChange(val) {
        this.pagination.pageSize = val
      },
      handleCurrentChange(val) {
        this.pagination.curPage = val
      },
      addWords() {
        const arr = []
        this.words.split('\n').forEach(item => {
          if (item && this.list.indexOf(item) === -1) {
            arr.push(item)
          }
        })
        this.$http.post(this.isDelete ? 'trial/blackwords/mutiDelete' : 'trial/blackwords/add', {
          words: arr
        }).then(() => {
          if (this.isDelete) {
            this.$message.success('操作成功')
          } else {
            this.list.concat(arr)
          }
          this.showEditModal = false;
        }).catch(() => {
          this.$message.error('操作错误，请联系管理员')
        });
      },
      delWords(value) {
        this.$confirm('此操作不可逆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('trial/blackwords/delete', {
            words: value.row
          }).then(() => {
            this.list.splice(value.$index + (this.pagination.curPage - 1) * this.pagination.pageSize, 1);
          }).catch(() => {
            this.$message.error('操作错误，请联系管理员')
          });
        }).catch(() => {});
      }
    }
  }
</script>
