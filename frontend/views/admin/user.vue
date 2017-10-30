<template>
  <section>
    <header>
      <el-button type="primary" icon="plus" size="large" @click="showCreateModal = true">注册</el-button>
      <v-modal v-model="showCreateModal"
               :header-text="'新注册一个管理员'"
               @cancel="resetSignUp"
               @submit="register">
        <el-form label-width="80px">
          <el-form-item label="昵称">
            <el-input v-model.trim="signUp.name"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input type="email" v-model.trim="signUp.email"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model.trim="signUp.password"></el-input>
          </el-form-item>
        </el-form>
      </v-modal>
    </header>
  </section>
</template>

<script>
  const defaultSignUp = {
    name: '',
    email: '',
    password: ''
  }
  export default {
    name: 'v-admin-user',
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
        showCreateModal: false,
        signUp: defaultSignUp
      }
    },
    methods: {
      register() {
        this.$http.post('/auth/register', {
          name: this.signUp.name,
          email: this.signUp.email,
          password: this.signUp.password
        }).then(() => {
          this.resetSignUp()
          this.$message.success('操作成功');
        }).catch(() => {
          this.$message.error('操作失败');
        })
      },
      resetSignUp() {
        this.showCreateModal = false
        this.signUp = defaultSignUp
      }
    }
  }
</script>
