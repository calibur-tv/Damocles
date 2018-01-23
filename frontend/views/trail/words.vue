<style lang="scss" scoped="">

</style>

<template>
  <section>
    <header>
      <el-button type="primary" icon="plus" size="large" @click="showCreateModal = true">添加高危词</el-button>
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
    <v-modal
      v-model="showCreateModal"
      header-text="添加高危词"
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
    name: 'v-',
    data () {
      return {
        list: [],
        loading: true,
        showCreateModal: false,
        words: ''
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
      addWords() {
        const arr = []
        this.words.split('\n').forEach(item => {
          if (item && this.list.indexOf(item) === -1) {
            arr.push(item)
          }
        })
        this.$http.post('trial/blackwords/add', {
          words: arr
        }).then(() => {
          this.list.concat(arr)
          this.showCreateModal = false;
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
            this.list.splice(value.$index, 1);
          }).catch(() => {
            this.$message.error('操作错误，请联系管理员')
          });
        }).catch(() => {});
      }
    }
  }
</script>
