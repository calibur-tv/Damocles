<style lang="scss">
  #trial-image-header {
    margin-bottom: 20px;

    button {
      margin-left: 5px;
    }
  }

  #trial-image-table {

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
    <header id="trial-image-header">
      <el-col :span="6">
        <el-input v-model="imageId" placeholder="图片id"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="handleImageDelete">删除</el-button>
      </el-col>
    </header>
    <ul id="trial-image-table" class="main-view" v-loading="loading">
      <el-col :span="5" :offset="1" v-for="(image, index) in list" :key="image.id">
        <el-card :body-style="{ padding: '0px' }">
          <a :href="image.url" target="_blank">
            <img :src="$resize(image.url, { width: 300, mode: 2 })" class="image">
          </a>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <el-button type="primary" @click="passImage(index, image.id)">通过</el-button>
              <el-button type="danger" @click="delImage(index, image.id)">删除</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <h3 v-if="!list.length">暂无内容</h3>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'TrialImage',
    data () {
      return {
        list: [],
        loading: true,
        imageId: ''
      }
    },
    created () {
      this.getData();
    },
    methods: {
      getData () {
        this.$http.get('/trial/images/list').then((res) => {
          this.list = res;
          this.loading = false;
        })
      },
      delImage (index, id) {
        this.$confirm('此操作不可逆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('trial/images/delete', { id }).then(() => {
            this.list.splice(index, 1);
          }).catch(() => {
            this.$message.error('操作错误，请联系管理员');
          });
        }).catch(() => {});
      },
      passImage (index, id) {
        this.$http.post('trial/images/pass', { id }).then(() => {
          this.list.splice(index, 1);
        }).catch(() => {
          this.$message.error('操作错误，请联系管理员');
        });
      },
      handleImageDelete () {
        this.$confirm('此操作不可逆, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('trial/image/delete', {id: this.imageId }).then(() => {
            this.$message.success('操作成功');
          }).catch(() => {
            this.$message.error('操作错误，请联系管理员');
          });
        }).catch(() => {})
      }
    }
  }
</script>
