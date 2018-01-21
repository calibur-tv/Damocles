<style lang="scss" scoped="">
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: $sidebar-collapse;
    overflow: hidden;
  }

  .sidebar:not(.el-menu--collapse) {
    width: $sidebar-width;
  }
</style>

<template>
  <el-menu class="sidebar"
           :collapse="collapse"
           :default-active="defaultActive"
           :router="true">

    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>

    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-picture"></i>
        <span slot="title">图片</span>
      </template>
      <el-menu-item index="/image/loop">首页轮播</el-menu-item>
      <el-menu-item index="/image/banner">banner图</el-menu-item>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-star-on"></i>
        <span slot="title">番剧</span>
      </template>
      <el-menu-item index="/bangumi/list">番剧列表</el-menu-item>
      <el-menu-item index="/bangumi/tag">标签列表</el-menu-item>
    </el-submenu>

    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-service"></i>
        <span slot="title">视频</span>
      </template>
      <el-menu-item index="/video/list">视频列表</el-menu-item>
    </el-submenu>

    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-view"></i>
        <span slot="title">审核</span>
      </template>
      <el-menu-item index="/trail/words">高危词</el-menu-item>
    </el-submenu>

    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </template>
      <el-menu-item index="/admin/user">管理员</el-menu-item>
    </el-submenu>

  </el-menu>
</template>

<script>
  export default {
    name: 'v-sideBar',
    components: {

    },
    props: ['collapse'],
    computed: {

    },
    data () {
      return {
        defaultActive: ''
      }
    },
    created () {

    },
    methods: {

    },
    mounted () {
      this.defaultActive = this.$route.path
    }
  }
</script>
