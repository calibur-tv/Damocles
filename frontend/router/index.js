import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: '首页',
      component: require('view/index').default
    },
    {
      path: '/image/loop',
      name: '首页轮播',
      component: require('view/image/loop').default
    },
    {
      path: '/image/banner',
      name: 'banner 图',
      component: require('view/image/banner').default
    },
    {
      path: '/bangumi/list',
      name: '番剧列表',
      component: require('view/bangumi/list').default
    },
    {
      path: '/bangumi/tag',
      name: '番剧标签',
      component: require('view/bangumi/tag').default
    },
    {
      path: '/bangumi/collection',
      name: '番剧合集',
      component: require('view/bangumi/collection').default
    },
    {
      path: '/bangumi/video',
      name: '番剧视频',
      component: require('view/bangumi/video').default
    },
    {
      path: '/admin/user',
      name: '管理员',
      component: require('view/admin/user').default
    }
  ]
})
