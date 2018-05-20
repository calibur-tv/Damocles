<template>
  <div v-loading="loading">
    <ve-line
      v-for="(key, index) in types"
      :key="index"
      :data="computeData(key)"
      :settings="computeSetting(key)"
    ></ve-line>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        loading: true,
        resource: [],
        keyMaps: {
          create_bangumi: '创建番剧',
          create_image: '总图片数',
          create_image_album: '总相册数',
          create_post: '总发帖',
          create_post_image: '总帖图数',
          create_post_reply: '总回帖量',
          create_role: '角色总数',
          create_video: '视频总量',
          user_register: '用户总量'
        }
      }
    },
    computed: {
      groupByTypeData () {
        return _.mapValues(_.groupBy(this.resource, 'type'),
          clist => clist.map(item => _.omit(item, 'type')))
      },
      groupByTimeDate () {
        return _.mapValues(_.groupBy(this.resource, 'day'),
          clist => clist.map(item => _.omit(item, 'day')))
      },
      types () {
        return Object.keys(this.groupByTypeData)
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$http.get('/indexData').then((res) => {
          this.resource = res.data.map(_ => {
            const day = parseInt(_.day, 10) * 1000
            return {
              id: parseInt(_.id, 10),
              day: parseInt(_.day, 10) * 1000,
              time: moment(day).format('MM月DD日'),
              count: parseInt(_.count, 10),
              type: _.type
            }
          });
          this.loading = false;
        })
      },
      computeData (key) {
        const data = this.groupByTypeData[key]
        return {
          rows: _.sortBy(data, 'day', 'asc')
        }
      },
      computeSetting (key) {
        return {
          metrics: ['count'],
          dimension: ['time'],
          labelMap: {
            count: this.keyMaps[key]
          }
        }
      }
    }
  }
</script>
