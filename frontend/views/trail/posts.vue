<style lang="scss">
  #trial-post-table {

    li {
      list-style-type: none;

      .header {
        background-color: #f5f7fa;
        height: 70px;
        line-height: 70px;
        padding-left: 20px;

        .user {
          float: left;
          display: block;
          margin-right: 5px;

          img {
            border-radius: 50%;
            display: inline-block;
            vertical-align: middle;
            border: 1px solid #fafafa;
          }
        }

        .title {
          overflow: hidden;
        }
      }

      .body {
        padding: 15px;
        border-left: 1px solid #ebebeb;
        border-right: 1px solid #ebebeb;

        .text {
          min-height: 100px;
          font-size: 15px;
          color: #333;
          line-height: 1.5em;
        }

        .images {
          border-top: 1px solid #ebebeb;
          padding-top: 20px;
          margin-top: 20px;

          img {
            display: inline-block;
            cursor: pointer;
          }
        }

        .tags {
          border-top: 1px solid #ebebeb;
          padding-top: 20px;
          margin-top: 20px;

          .el-tag {
            margin-bottom: 3px;
          }
        }
      }

      .footer {
        padding: 15px;
        border: 1px solid #ebebeb;
        text-align: right;
      }
    }
  }
</style>

<template>
  <section>
    <el-input v-model="postId" placeholder="请输入帖子id"></el-input>
    <el-button @click="handlePostDelete">删除</el-button>
    <ul id="trial-post-table" class="main-view" v-loading="loading">
      <li v-for="(item, index) in list" :key="item.id">
        <div class="header">
          <a :href="$href(`user/${item.user.zone}`)" class="user" target="_blank">
            <img :src="$resize(item.user.avatar, { width: 50 })" alt="">
            <span class="nickname" v-text="item.user.nickname"></span>：
          </a>
          <a :href="$href(`post/${item.id}`)" target="_blank">
            <h4 class="title" v-html="item.f_title.text || item.title"></h4>
          </a>
        </div>
        <div class="body">
          <div class="text" v-html="item.f_content.text || item.content"></div>
          <div class="images" v-if="item.images.length">
            <img
              v-for="(item, subIndex) in item.images"
              @click="deleteImage(item.id, item.src, index, subIndex)"
              :src="$resize(item.src, { width: 150 })"
            >
          </div>
          <div class="tags" v-if="item.words.filters.length">
            <el-tag
              type="info"
              v-for="tag in item.words.filters"
              :key="tag"
              v-text="tag"
            ></el-tag>
          </div>
        </div>
        <div class="footer">
          <el-button size="small" type="default" icon="edit" @click="passPost(index, item.id)">通过</el-button>
          <el-button size="small" type="primary" icon="edit" @click="delPost(index, item.id)">删帖</el-button>
          <el-button size="small" type="danger" icon="edit" @click="delUser(index, item.user.id)">删人</el-button>
        </div>
      </li>
      <h3 v-if="!list.length">暂无内容</h3>
    </ul>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        list: [],
        loading: true,
        postId: ''
      }
    },
    created () {
      this.getData();
    },
    methods: {
      getData () {
        this.$http.get('/trial/posts/list').then((res) => {
          this.list = res;
          this.loading = false;
        })
      },
      delUser (index, id) {
        this.$confirm('此操作不可逆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('trial/users/delete', { id }).then(() => {
            this.list.splice(index, 1);
          }).catch(() => {
            this.$message.error('操作错误，请联系管理员');
          });
        }).catch(() => {});
      },
      delPost (index, id) {
        this.$confirm('此操作不可逆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('trial/posts/delete', { id }).then(() => {
            this.list.splice(index, 1);
          }).catch(() => {
            this.$message.error('操作错误，请联系管理员');
          });
        }).catch(() => {});
      },
      passPost (index, id) {
        this.$http.post('trial/posts/pass', { id }).then(() => {
          this.list.splice(index, 1);
        }).catch(() => {
          this.$message.error('操作错误，请联系管理员');
        });
      },
      deleteImage (id, src, index, subIndex) {
        if (!src) {
          return;
        }
        this.$confirm('此操作不可逆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('trial/posts/deleteImage', {
            id, src
          }).then(() => {
            this.list[index].images.splice(subIndex, 1);
          }).catch(() => {
            this.$message.error('操作错误，请联系管理员');
          });
        }).catch(() => {});
      },
      handlePostDelete () {
        this.$confirm('此操作不可逆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('trial/posts/delete', { id: this.postId }).then(() => {
            this.$message.success('操作成功');
          }).catch(() => {
            this.$message.error('操作错误，请联系管理员');
          });
        }).catch(() => {})
      }
    }
  }
</script>
