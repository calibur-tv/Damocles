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
        label="内容"
        prop="desc">
      </el-table-column>
      <el-table-column label="浏览器">
        <template slot-scope="scope">
          <div v-html="computeUA(scope.row.ua)"></div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="remove(scope.$index, scope.row.id)">确认</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import UaDetector from '~/assets/js/ua'

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
            label: '资源报错',
            value: 4
          },
          {
            label: '求资源',
            value: 5
          },
          {
            label: '求偶像',
            value: 6
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
        let result = ''
        this.options.forEach(item => {
          if (item.value === parseInt(type, 10)) {
            result = item.label
          }
        })
        return result
      },
      computeUA (ua) {
        const parser = new UaDetector(ua).parse
        return `系统：${parser.os.name} - ${parser.os.fullVersion}<br>浏览器：${parser.browser.name} - ${parser.browser.fullVersion}`
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
