<style lang="scss" scoped="">

</style>

<template>
  <section>
    <el-table
      :data="list"
      class="main-view"
      border>
      <el-table-column label="名称">
        <template slot-scope="scope">
          <a :href="$href(`album/${scope.row.id}`)" target="_blank">{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column width="300" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" :disabled="!scope.$index" @click="move(scope.$index, false)">上移</el-button>
          <el-button type="primary" :disabled="scope.$index === list.length - 1" @click="move(scope.$index, true)">下移</el-button>
          <el-button type="primary" :disabled="!scope.$index" @click="toTop(scope.$index)">置顶</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <br>
    <br>
    <el-col :span="3" :offset="19">
      <el-button type="primary" @click="submitForm">确认编辑</el-button>
    </el-col>
  </section>
</template>

<script>
  export default {
    name: 'edit-bangumi-cartoon',
    computed: {
      id () {
        return this.$route.params.id
      }
    },
    data () {
      return {
        loading: true,
        list: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$http.post('/bangumi/cartoonDetail', {
          id: this.id
        }).then((data) => {
          this.list = data.data
          this.loading = false
        }).catch(() => { this.$message.error('数据加载错误') })
      },
      move (index, toNext) {
        const prev = toNext ? index : index - 1;
        const next = toNext ? index + 1 : index;
        this.list.splice(prev, 1, ...this.list.splice(next, 1, this.list[prev]))
      },
      toTop (index) {
        const move = this.list.splice(index, 1)
        this.list = move.concat(this.list)
      },
      submitForm () {
        this.$http.post('/bangumi/cartoonEdit', {
          id: this.id,
          cartoon: this.list.map(_ => _.id).join(',')
        }).then(() => {
          this.$message.success('更新成功')
        }).catch((err) => {
          this.$message.error('数据更新失败')
          console.log(err)
        })
      }
    }
  }
</script>
