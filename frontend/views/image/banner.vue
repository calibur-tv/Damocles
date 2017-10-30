<template>
  <section>
    <header>
      <el-col :span="8">
        <el-alert
          title="展示规则："
          type="info"
          description="如果所在时刻没有图或有多张图，则显示最后一张图."
          :closable="false">
        </el-alert>
      </el-col>
    </header>
    <div class="main-view"></div>
    <footer></footer>
  </section>
</template>

<script>
  export default {
    name: 'v-',
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

      }
    },
    created () {

    },
    methods: {

    },
    mounted () {

    }
  }
</script>
