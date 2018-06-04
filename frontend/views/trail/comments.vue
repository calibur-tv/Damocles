<style lang="scss">
  #trial-comment {
    .comment-item-img {
      display: inline-block;
      margin-right: 5px;
      margin-bottom: 5px;
      cursor: pointer;
    }
  }
</style>

<template>
  <section id="trial-comment">
    <el-table
      :data="list"
      class="main-view"
      v-loading="loading"
      border>
      <el-table-column label="内容">
        <template slot-scope="scope">
          <template v-if="checkIsHTML(scope.row.content)">
            <div
              v-for="(item, index) in transformerContent(scope.row.content)"
              :key="index"
              :class="`comment-item-${item.type}`"
            >
              <div v-if="item.type === 'txt'" v-html="item.data"></div>
              <div v-else-if="item.type === 'img'" @click="openImage(item.data.key)">
                <img width="auto" height="150" :src="$resize($CDNPrefix + item.data.key, { width: 300, mode: 2 })">
              </div>
            </div>
          </template>
          <span v-else>{{ scope.row.content }}</span>
        </template>
      </el-table-column>
      <el-table-column width="440" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="pass(scope.row, scope.$index)">通过</el-button>
          <el-button type="danger" @click="ban(scope.row, scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
  export default {
    name: 'trial-comment',
    data () {
      return {
        loading: false,
        list: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData () {
        this.$http.get('/trial/comment/list').then((res) => {
          this.list = res;
          this.loading = false;
        })
      },
      pass (item, index) {
        this.$http.post('/trial/comment/pass', {
          id: item.id,
          type: item.type
        }).then(() => {
          this.$message.success('操作成功')
          this.list.splice(index, 1);
        }).catch((err) => {
          this.$Message.error('操作失败')
          console.log(err);
        })
      },
      ban (item, index) {
        this.$http.post('/trial/comment/ban', {
          id: item.id,
          type: item.type
        }).then(() => {
          this.$message.success('操作成功')
          this.list.splice(index, 1);
        }).catch((err) => {
          this.$Message.error('操作失败')
          console.log(err);
        })
      },
      checkIsHTML (content) {
        try {
          JSON.parse(content)
          return true
        } catch (e) {
          return false
        }
      },
      transformerContent (content) {
        try {
          return JSON.parse(content)
        } catch (e) {
          return []
        }
      },
      openImage (url) {
        window.open(this.$CDNPrefix + url)
      }
    }
  }
</script>
