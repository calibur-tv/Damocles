<style lang="scss">
  @import "~assets/css/global.scss";

  #__orz {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    .view {
      margin-top: -$header-height;
      padding: $main-view-padding;
      padding-top: $main-view-padding + $header-height;
      padding-left: $sidebar-width + $main-view-padding;
      transition: $sidebar-transition;
      display: flex;
      flex-direction: column;
      min-height: 100%;

      &.view-collapse {
        padding-left: $sidebar-collapse + 20;
      }

      >header {
        margin-bottom: 20px;
      }

      .main-view {
        flex-grow: 1;
      }

      .el-table {
        border: 0;

        &:before, &:after {
          background-color: transparent;
        }

        .el-table_1_column_1 {
          border-left: 1px solid #dfe6ec;
        }
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
    name: 'v-index',
    components: {
      vHeader, vSideBar
    },
    props: {

    },
    watch: {

    },
    computed: {

    },
    data () {
      return {
        isCollapse: false
      }
    },
    methods: {

    },
    mounted () {

    }
  }
</script>
