<style lang="scss" scoped="">

</style>

<template>
  <section>
    <header>
      <el-button type="primary" icon="plus" size="large" @click="addWords">添加高危词</el-button>
    </header>
    <el-table
      :data="list"
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
  </section>
</template>

<script>
  export default {
    name: 'v-',
    data () {
      return {
        list: [],
        loading: false
      }
    },
    created () {
      this.getWords();
    },
    methods: {
      getWords() {
        this.$http.get('/trial/blackwords/list').then((res) => {
          this.list = res
        })
      },
      addWords() {
        this.$prompt('内容', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          if (value) {
            this.$http.post('trial/blackwords/add', {
              words: value
            }).then(() => {
              this.list.unshift(value)
            }).catch(() => {
              this.$message.error('操作错误，请联系管理员')
            });
          }
        }).catch(() => {});
      },
      delWords(value) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('trial/blackwords/delete', {
            words: value.row
          }).then(() => {
            this.list.splice(value.$index, 1);
          }).catch(() => {
            this.$message.error('操作错误，请联系管理员')
          });
        }).catch(() => {});
      }
    }
  }
</script>
