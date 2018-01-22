<style lang="scss" scoped="">

</style>

<template>
  <section>
    <header></header>
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
        list: [],
        loading: true
      }
    },
    created () {
      this.getData();
    },
    methods: {
      getData () {
        this.$http.get('/trial/users/list').then((res) => {
          this.list = res;
          this.loading = false;
        })
      }
    },
    mounted () {

    }
  }
</script>
