<style lang="scss">
  @import "assets/css/global";

  #__orz {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;

    .view {
      padding-right: $main-view-padding;
      padding-bottom: $main-view-padding;
      padding-top: $main-view-padding;
      padding-left: $sidebar-width + $main-view-padding;
      transition: $sidebar-transition;
      display: flex;
      flex-direction: column;
      width: 100%;

      &.view-collapse {
        padding-left: $sidebar-collapse + 20;
      }

      >header {
        margin-bottom: 20px;

        .el-breadcrumb {
          margin-left: 30px;
        }
      }

      .main-view {
        flex-grow: 1;
      }

      .el-select {
        width: 100%;
      }

      .el-slider__button-wrapper {
        line-height: 36px;
      }

      .el-tooltip {
        box-sizing: content-box;
      }

      >footer {
        margin-top: 30px;

        .el-pagination {
          float: right;
          margin-right: 50px;
        }
      }
    }
  }
</style>

<template>
  <div id="__orz">
    <v-header :collapse.sync="isCollapse"></v-header>
    <v-side-bar :collapse="isCollapse"></v-side-bar>
    <router-view class="view" :class="{ 'view-collapse' : isCollapse }"></router-view>
  </div>
</template>

<script>
  import vSideBar from 'component/layouts/Sidebar'
  import vHeader from 'component/layouts/Header'

  export default {
    components: {
      vHeader, vSideBar
    },
    data () {
      return {
        isCollapse: false,
        breadcrumb: []
      }
    }
  }
</script>
