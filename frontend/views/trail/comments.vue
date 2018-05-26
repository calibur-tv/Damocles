<template>
  <section>
    <el-table
      :data="list"
      class="main-view"
      v-loading="loading"
      border>
      <el-table-column label="内容">
        <template slot-scope="scope">
          <span>{{ scope.row.content }}</span>
        </template>
      </el-table-column>
      <el-table-column width="440" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="pass(scope.row, scope.$index)">通过</el-button>
          <el-button type="danger" @click="ban(scope.row, scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
  export default {
    name: 'trial-comment',
    data () {
      return {
        loading: false,
        list: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$http.get('/trial/comment/list').then((res) => {
          this.list = res;
          this.loading = false;
        })
      },
      pass (item, index) {
        this.$http.post('/trial/comment/pass', {
          id: item.id,
          type: item.type
        }).then(() => {
          this.$message.success('操作成功')
          this.list.splice(index, 1);
        }).catch((err) => {
          this.$Message.error('操作失败')
          console.log(err);
        })
      },
      ban (item, index) {
        this.$http.post('/trial/comment/ban', {
          id: item.id,
          type: item.type
        }).then(() => {
          this.$message.success('操作成功')
          this.list.splice(index, 1);
        }).catch((err) => {
          this.$Message.error('操作失败')
          console.log(err);
        })
      }
    }
  }
</script>
