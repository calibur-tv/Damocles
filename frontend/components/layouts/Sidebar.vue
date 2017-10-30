<style lang="scss" scoped="">
  .sidebar {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: $sidebar-color;
    width: $sidebar-collapse;
    overflow: hidden;
  }

  .sidebar:not(.el-menu--collapse) {
    width: $sidebar-width;
  }
</style>

<template>
  <el-menu class="sidebar"
           theme="dark"
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
      <el-menu-item-group title="番剧">
        <el-menu-item index="/bangumi/list">番剧列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="标签">
        <el-menu-item index="/bangumi/tag">标签列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="合集">
        <el-menu-item index="/bangumi/collection">合集列表</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="视频">
        <el-menu-item index="/bangumi/video">视频列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="3">
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
