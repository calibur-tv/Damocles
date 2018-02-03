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
      <el-table-column label="用户">
        <template slot-scope="scope">
          <a :href="$href(`user/${scope.row.user.zone}`)" target="_blank">
            <span>{{ scope.row.user.nickname }}</span>
          </a>
        </template>
      </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">
          <a :href="$href(`post/${scope.row.id}`)" target="_blank">
            <span>{{ scope.row.title }}</span>
          </a>
        </template>
      </el-table-column>
      <el-table-column label="内容">
        <template slot-scope="scope">
          <div v-html="scope.row.content"></div>
        </template>
      </el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img v-for="(item, index) in scope.row.images"  @click="deleteImage(item.id, item.src, scope.$index, index)" :src="$resize(item.src, { width: 150 })" alt="">
        </template>
      </el-table-column>
      <el-table-column width="200" label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="primary" icon="edit" @click="delPost(scope.$index, scope.row.id)">删帖</el-button>
          <el-button size="small" type="danger" icon="edit" @click="delUser(scope.$index, scope.row.user.id)">删人</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
  export default {
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
        this.$http.get('/trial/posts/list').then((res) => {
          this.list = res;
          this.loading = false;
        })
      },
      delUser (index, id) {
        this.$confirm('此操作不可逆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('trial/users/delete', { id }).then(() => {
            this.list.splice(index, 1);
          }).catch(() => {
            this.$message.error('操作错误，请联系管理员');
          });
        }).catch(() => {});
      },
      delPost (index, id) {
        this.$confirm('此操作不可逆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('trial/posts/delete', { id }).then(() => {
            this.list.splice(index, 1);
          }).catch(() => {
            this.$message.error('操作错误，请联系管理员');
          });
        }).catch(() => {});
      },
      deleteImage (id, src, index, subIndex) {
        if (!src) {
          return;
        }
        this.$confirm('此操作不可逆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('trial/posts/deleteImage', {
            id, src
          }).then(() => {
            this.list[index].images.splice(subIndex, 1);
          }).catch(() => {
            this.$message.error('操作错误，请联系管理员');
          });
        }).catch(() => {});
      }
    }
  }
</script>
