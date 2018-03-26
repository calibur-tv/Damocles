<style lang="scss" scoped="">

</style>

<template>
  <div>
    <el-table
      :data="list"
      class="main-view"
      v-loading="loading"
      border
      stripe
    >
      <el-table-column label="类型">
        <template slot-scope="scope">
          {{ computeType(scope.row.type) }}
        </template>
      </el-table-column>
      <el-table-column
        prop="desc"
        label="内容">
      </el-table-column>
      <el-table-column label="操作">
        <button @click="remove(scope.$index, scope.row.id)">确认</button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'userFeedback',
    data () {
      return {
        options: [
          {
            label: '功能建议',
            value: 1
          },
          {
            label: '遇到错误',
            value: 2
          },
          {
            label: '资源问题',
            value: 4
          },
          {
            label: '其它问题',
            value: 3
          }
        ],
        list: [],
        loading: true
      }
    },
    created () {
      this.getList()
    },
    methods: {
      getList () {
        this.$http.get('/user/feedback').then((data) => {
          this.list = data
          this.loading = false
        })
      },
      computeType (type) {
        this.options.forEach(item => {
          if (item.value === parseInt(type, 10)) {
            return item.label
          }
        })
      },
      remove (index, id) {
        this.$http.post('/user/feedback/read', {
          id
        }).then(() => {
          this.list.splice(index, 1);
        }).catch(() => {
          this.$message.error('操作失败，请重试');
        })
      }
    }
  }
</script>
