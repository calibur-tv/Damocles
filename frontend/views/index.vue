<template>
  <div>
    <h1>总用户数：{{ states.total_user }}</h1>
    <h1>总帖子数：{{ states.total_post }}</h1>
    <h1>总图片数：{{ states.total_image }}</h1>
    <h1>总番剧数：{{ states.total_bangumi }}</h1>
    <h1>总标签数：{{ states.total_tag }}</h1>
    <h1>总视频数：{{ states.total_video }}</h1>
    <h1>总角色数：{{ states.total_role }}</h1>
  </div>
</template>

<script>
  export default {
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
        states: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$http.get('/indexData').then((res) => {
          this.states = res.data;
          this.loading = false;
        })
      }
    },
    mounted () {

    }
  }
</script>
