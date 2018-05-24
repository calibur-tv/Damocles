<style lang="scss" scoped="">

</style>

<template>
  <section class="main-view" v-loading="loading">
    <el-table
      :data="list"
      class="main-view"
      border>
      <el-table-column label="番名">
        <template slot-scope="scope">
          <a :href="$href(`bangumi/${scope.row.id}`)" target="_blank">{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column width="300" label="操作">
        <template slot-scope="scope">
          <router-link :to="`/bangumi/cartoon/edit/${scope.row.id}`">
            <el-button size="small" type="primary" icon="edit">编辑漫画</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
  export default {
    name: 'bangumi-cartoon-list',
    components: {

    },
    props: {

    },
    watch: {

    },
    computed: {

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
        this.$http.get('/bangumi/cartoonBangumiList').then((data) => {
          this.list = data.data
          this.loading = false
        }).catch(() => { this.$message.error('数据错误') })
      }
    },
    mounted () {

    }
  }
</script>
