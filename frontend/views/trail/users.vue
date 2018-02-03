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
      <el-table-column label="昵称">
        <template slot-scope="scope">
          <a :href="$href(`user/${scope.row.zone}`)" target="_blank">
            <span>{{ scope.row.nickname }}</span>
          </a>
        </template>
      </el-table-column>
      <el-table-column label="头像">
        <template slot-scope="scope">
          <a :href="scope.row.avatar" target="_blank">
            <img :src="$resize(scope.row.avatar, { width: 150 })">
          </a>
        </template>
      </el-table-column>
      <el-table-column label="封面">
        <template slot-scope="scope">
          <a :href="scope.row.banner" target="_blank">
            <img :src="$resize(scope.row.banner, { width: 200, height: 150, mode: 0 })">
          </a>
        </template>
      </el-table-column>
      <el-table-column label="签名">
        <template slot-scope="scope">
          <span v-text="scope.row.signature"></span>
        </template>
      </el-table-column>
      <el-table-column width="400" label="操作">
        <template slot-scope="scope">
          <el-button size="small" type="primary" icon="edit" @click="delSomething(scope.$index, scope.row.id,  scope.row.zone, 'nickname')">昵称</el-button>
          <el-button size="small" type="primary" icon="edit" @click="delSomething(scope.$index, scope.row.id,  '', 'avatar')">头像</el-button>
          <el-button size="small" type="primary" icon="edit" @click="delSomething(scope.$index, scope.row.id,  '', 'banner')">封面</el-button>
          <el-button size="small" type="primary" icon="edit" @click="delSomething(scope.$index, scope.row.id,  '', 'signature')">签名</el-button>
          <el-button size="small" type="danger" icon="edit" @click="delUser(scope.$index, scope.row.id)" v-if="!scope.row.deleted_at">封禁</el-button>
          <el-button size="small" type="success" icon="edit" @click="recoverUser(scope.$index, scope.row.id)" v-else>解禁</el-button>
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
        this.$http.get('/trial/users/list').then((res) => {
          this.list = res;
          this.loading = false;
        })
      },
      delSomething (index, id, value, key) {
        this.$confirm('此操作不可逆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('trial/users/delSomething', {
            key,
            value,
            id
          }).then(() => {
            this.list[index][key] = value;
          }).catch(() => {
            this.$message.error('操作错误，请联系管理员');
          });
        }).catch(() => {});
      },
      delUser (index, id) {
        this.$confirm('此操作不可逆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('trial/users/delete', { id }).then(() => {
            this.list[index].deleted_at = Date.now();
          }).catch(() => {
            this.$message.error('操作错误，请联系管理员');
          });
        }).catch(() => {});
      },
      recoverUser (index, id) {
        this.$confirm('此操作不可逆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('trial/users/recover', { id }).then(() => {
            this.list[index].deleted_at = null;
          }).catch(() => {
            this.$message.error('操作错误，请联系管理员');
          });
        }).catch(() => {});
      }
    }
  }
</script>
