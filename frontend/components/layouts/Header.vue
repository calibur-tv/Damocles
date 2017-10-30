<style lang="scss" scoped="">
  .header {
    padding-left: $sidebar-width;
    transition: $sidebar-transition;

    &.header-collapse {
      padding-left: $sidebar-collapse;
    }

    .collapse-btn {
      width: 20px;
      height: $header-height;
    }

    .breadcrumb {
      color: #97a8be;
      line-height: $header-height;
    }

    .user-panel {
      float: right;

      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
    }
  }
</style>

<template>
  <el-menu class="header" :class="{ 'header-collapse': collapse }" mode="horizontal">
    <el-menu-item index="0">
      <button class="collapse-btn" :class="[ collapse ? 'el-icon-d-arrow-right' : 'el-icon-d-arrow-left' ]" @click="toggleCollapse">
      </button>
    </el-menu-item>
    <span class="breadcrumb" v-text="breadcrumb"></span>
    <el-submenu class="user-panel" index="9">
      <template slot="title">
        <img class="avatar" src="~assets/img/avatar.gif" alt="avatar">
      </template>
      <el-menu-item @click="logout" index="9-1">退出</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: 'v-header',
    components: {

    },
    props: ['collapse'],
    watch: {
      '$route' (router) {
        this.breadcrumb = router.name
      }
    },
    computed: {

    },
    data () {
      return {
        breadcrumb: this.$route.name
      }
    },
    created () {

    },
    methods: {
      toggleCollapse () {
        this.$emit('update:collapse', !this.collapse)
      },
      logout () {
        this.$http.post('/auth/logout').then(() => window.location = '/')
      }
    },
    mounted () {

    }
  }
</script>
