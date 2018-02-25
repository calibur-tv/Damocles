<template>
  <div>
    <h1>总用户数：{{ states.total_user }}</h1>
    <h1>总帖子数：{{ states.total_post }}</h1>
    <h1>总图片数：{{ states.total_image }}</h1>
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
