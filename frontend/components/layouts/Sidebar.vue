<style lang="scss">
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: $sidebar-collapse;
    overflow: hidden;

    .el-badge__content {
      top: 27px;
      right: -5px;
    }
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
      <el-menu-item index="/bangumi/cartoon">漫画列表</el-menu-item>
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
        <i class="el-icon-location-outline"></i>
        <span slot="title">角色</span>
      </template>
      <el-menu-item index="/cartoonRole/list">角色列表</el-menu-item>
    </el-submenu>

    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-view"></i>
        <span slot="title">
          <el-badge :value="trialTotalCount">
            审核
          </el-badge>
        </span>
      </template>
      <el-menu-item index="/trail/words">高危词</el-menu-item>
      <el-menu-item index="/trail/users">
        <el-badge :value="counts.users">用户审核</el-badge>
      </el-menu-item>
      <el-menu-item index="/trail/posts">
        <el-badge :value="counts.posts">帖子审核</el-badge>
      </el-menu-item>
      <el-menu-item index="/trail/images">
        <el-badge :value="counts.images">图片审核</el-badge>
      </el-menu-item>
      <el-menu-item index="/trail/comments">
        <el-badge :value="counts.comments">评论审核</el-badge>
      </el-menu-item>
    </el-submenu>

    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-bell"></i>
        <span slot="title">
          <el-badge :value="counts.feedback">
            用户
          </el-badge>
        </span>
      </template>
      <el-menu-item index="/user/list">用户列表</el-menu-item>
      <el-menu-item index="/user/fakers">运营号</el-menu-item>
      <el-menu-item index="/user/feedback">
        <el-badge :value="counts.feedback">
          用户反馈
        </el-badge>
      </el-menu-item>
    </el-submenu>

    <el-submenu index="99">
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
    props: ['collapse'],
    data () {
      return {
        defaultActive: '',
        counts: {
          users: 0,
          posts: 0,
          feedback: 0,
          comments: 0
        }
      }
    },
    created () {
      this.getTipsCount()
    },
    computed: {
      trialTotalCount () {
        let result = 0
        Object.keys(this.counts).forEach(key => {
          if (key !== 'feedback') {
            result += this.counts[key]
          }
        })
        return result
      }
    },
    methods: {
      getTipsCount () {
        this.$http.get('tips/count').then((data) => {
          this.counts = data
        })
      }
    },
    mounted () {
      this.defaultActive = this.$route.path
    }
  }
</script>
