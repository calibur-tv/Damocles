<style lang="scss">
  .video-column {
    ul, li {
      list-style-type: none;
    }

    .table-item {
      display: inline-block;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }

    .name {
      width: 25%;
      min-width: 150px
    }

    .part {
      width: 10%;
      min-width: 80px;
    }

    .play_count {
      width: 20%;
      min-width: 120px;
    }

    .console {
      width: 40%;
    }
  }
</style>

<template>
  <section>
    <header>
      <el-row>
        <el-col :span="4">
          <router-link to="/video/create">
            <el-button type="primary" icon="plus" size="large">新建视频</el-button>
          </router-link>
        </el-col>
        <el-col :span="8" :offset="12">
          <el-select v-model="searchId" @change="handleSearch" filterable placeholder="搜索">
            <el-option
              v-for="item in bangumis"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
    </header>
    <template v-if="searchVideos.length">
      <br/>
      <br/>
      <el-table
        :data="searchVideos"
        v-loading="searchLoading"
        border
        highlight-current-row
      >
        <el-table-column
          label="番名">
          <template slot-scope="scope">
            <a :href="$href(`bangumi/${scope.row.bangumi_id}`)" target="_blank">{{ scope.row.bname }}</a>
          </template>
        </el-table-column>
        <el-table-column
          label="名称">
          <template slot-scope="scope">
            <a :href="$href(`video/${scope.row.id}`)" target="_blank">{{ scope.row.name }}</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="part"
          width="100"
          label="集数">
        </el-table-column>
        <el-table-column
          sortable
          width="110"
          prop="count_played"
          label="播放量">
        </el-table-column>
        <el-table-column
          sortable
          width="110"
          prop="count_comment"
          label="评论数">
        </el-table-column>
        <el-table-column
          width="200"
          label="操作">
          <template slot-scope="scope">
            <el-button
              size="small"
              type="primary"
              icon="edit"
              @click="handleEditOpen(scope.row)">编辑</el-button>
            <el-button
              size="small"
              icon="delete"
              :type="scope.row.deleted_at ? 'warning' : 'danger'"
              @click="handleDelete(scope.row)">{{ scope.row.deleted_at ? '恢复' : '删除' }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <br/>
      <br/>
    </template>
    <el-table
      :data="transformerFilter"
      class="main-view"
      v-loading="loading"
      border
      highlight-current-row
    >
      <el-table-column class="video-column" type="expand">
        <template slot-scope="props">
          <div class="video-column">
            <div class="header">
              <span class="table-item name">名称</span>
              <span class="table-item part">集数</span>
              <span class="table-item play_count">播放量</span>
              <span class="table-item console">操作</span>
            </div>
            <ul>
              <li v-for="item in props.row.value">
              <span class="table-item name">
                <a :href="$href(`video/${item.id}`)" target="_blank">{{ item.name }}</a>
              </span>
                <span class="table-item part" v-text="item.part"></span>
                <span class="table-item play_count" v-text="item.count_played"></span>
                <span class="table-item console">
                <el-button
                  size="small"
                  type="primary"
                  icon="edit"
                  @click="handleEditOpen(item)"
                >编辑</el-button>
                <el-button
                  size="small"
                  icon="delete"
                  :type="item.deleted_at ? 'warning' : 'danger'"
                  @click="handleDelete(item)"
                >{{ item.deleted_at ? '恢复' : '删除' }}</el-button>
              </span>
              </li>
            </ul>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="番剧名称"
      >
        <template slot-scope="scope">
          <a :href="$href(`bangumi/${scope.row.id}`)" target="_blank">{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column
        label="集数"
        prop="count">
      </el-table-column>
    </el-table>
    <v-modal class="video-editor-modal"
             v-model="showEditorModal"
             :header-text="'视频编辑'"
             @submit="handleEditDone">
      <el-form :model="editForm">
        <el-row>
          <el-col :span="9">
            <el-form-item label="番剧" :label-width="'85px'">
              <el-select
                v-model="editForm.bangumi_id"
                placeholder="请选择"
                filterable
              >
                <el-option
                  v-for="item in bangumis"
                  :key="item.id"
                  :value="item.id"
                  :label="item.name"
                  :disabled="!!item.deleted_at">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="集数" :label-width="'85px'">
              <el-input v-model.trim="editForm.part" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="名称" :label-width="'85px'">
              <el-input v-model.trim="editForm.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <template>
          <el-form-item label="720P 资源" :label-width="'85px'">
            <el-col :span="18">
              <el-input v-model.trim="editForm.resource.video[720].src" auto-complete="off">
                <template slot="prepend">https://video.calibur.tv/</template>
              </el-input>
            </el-col>
            <el-col :span="4" :offset="1" v-if="editForm.resource.video[720].src">
              字幕：<el-switch v-model="editForm.resource.video[720].useLyc"></el-switch>
            </el-col>
          </el-form-item>
        </template>
        <template>
          <el-form-item label="1080P 资源" :label-width="'85px'">
            <el-col :span="18">
              <el-input v-model.trim="editForm.resource.video[1080].src" auto-complete="off">
                <template slot="prepend">https://video.calibur.tv/</template>
              </el-input>
            </el-col>
            <el-col :span="4" :offset="1" v-if="editForm.resource.video[1080].src">
              字幕：<el-switch v-model="editForm.resource.video[1080].useLyc"></el-switch>
            </el-col>
          </el-form-item>
        </template>
        <el-form-item label="海报" :label-width="'85px'">
          <el-input v-model.trim="editForm.poster" auto-complete="off">
            <template slot="prepend">https://image.calibur.tv/</template>
          </el-input>
        </el-form-item>
        <el-form-item label="字幕" :label-width="'85px'">
          <el-input v-model.trim="editForm.resource.lyric.zh" auto-complete="off">
            <template slot="prepend">https://video.calibur.tv/</template>
          </el-input>
        </el-form-item>
        <el-form-item label="外链资源" :label-width="'85px'">
          <el-input v-model.trim="editForm.url" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
    </v-modal>
    <footer>
      <el-pagination
        background
        layout="total, prev, pager, next"
        :current-page="pagination.curPage"
        :page-size="pagination.pageSize"
        :pageCount="pagination.totalPage"
        :total="pagination.total"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </footer>
  </section>
</template>

<script>
  export default {
    computed: {
      transformList () {
        return _(this.list)
          .groupBy(x => x.bangumi_id)
          .map((value, key) => ({ id: key, value, name: value[0].bname, count: value.length }))
          .value();
      },
      transformerFilter () {
        const begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
        return this.transformList.slice(begin, begin + this.pagination.pageSize)
      }
    },
    data () {
      return {
        loading: true,
        list: [],
        bangumis: [],
        pagination: {
          totalPage: 0,
          pageSize: 10,
          curPage: 1,
          total: 0,
          maxPage: 1
        },
        showEditorModal: false,
        showCreateModal: false,
        dialogTitle: '',
        editForm: {
          id: '',
          bangumi_id: '',
          bname: '',
          name: '',
          part: '',
          poster: '',
          url: '',
          resource: {
            "video": {
              "720": {
                "useLyc": false,
                "src": ""
              },
              "1080": {
                "useLyc": false,
                "src": ""
              }
            },
            "lyric": {
              "zh": "",
              "en": ""
            }
          }
        },
        CDNPrefix: 'https://image.calibur.tv/',
        searchId: undefined,
        searchVideos: [],
        searchLoading: false
      }
    },
    created () {
      this.getVideos()
    },
    methods: {
      getVideos() {
        this.$http.get('/bangumi/videos').then((data) => {
          this.list = data.videos
          this.bangumis = data.bangumis
          this.pagination.total = data.total
          this.pagination.totalPage =  Math.ceil(data.total / this.pagination.pageSize)
          this.loading = false
        })
      },
      handleCurrentChange(val) {
        if (val <= this.pagination.maxPage) {
          this.pagination.curPage = val
          return
        }
        if (val > this.pagination.maxPage) {
          this.loading = true
          this.$http.post('/bangumi/videos', {
            seenIds: this.transformList.map(_ => parseInt(_.id, 10)),
            take: this.pagination.pageSize * (val - this.pagination.maxPage)
          }).then((data) => {
            this.list = this.list.concat(data)
            this.pagination.curPage = val
            this.pagination.maxPage = val
            this.loading = false
          }).catch(() => {
            this.$message.error('加载失败，请重试');
            this.loading = false
          })
        }
      },
      handleDelete(row) {
        const isDeleted = row.deleted_at !== null;
        this.$confirm(`确定要${isDeleted ? '恢复' : '删除'}《${row.name}》吗?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post('/video/delete', {
            id: row.id,
            isDeleted: isDeleted
          }).then(() => {
            row.deleted_at = isDeleted ? null : moment().format('YYYY-MM-DD H:m:s');
            this.$message.success('操作成功');
          }, (err) => {
            this.$message.error('操作失败');
            console.log(err);
          });
        })
      },
      handleEditOpen(row) {
        this.dialogTitle = row.name;

        Object.keys(row).forEach(key => {
          this.editForm[key] = row[key]
        })
        const defResource = {
          "video": {
            "720": {
              "useLyc": false,
              "src": ""
            },
            "1080": {
              "useLyc": false,
              "src": ""
            }
          },
          "lyric": {
            "zh": "",
            "en": ""
          }
        }
        this.editForm.resource = row.resource ? this.$deepAssign({}, defResource, row.resource) : Object.assign({}, defResource)

        this.showEditorModal = true;
      },
      computedBangumiId(bname) {
        for (const bangumi of this.bangumis) {
          if (bangumi.name === bname) {
            return bangumi.id
          }
        }
        return 0;
      },
      handleEditDone() {
        this.$http.post('/video/edit', Object.assign(this.editForm, {
          url: this.editForm.url.split('?').shift()
        })).then(() => {
          this.showEditorModal = false;
          this.$message.success('操作成功，页面刷新后可看到改动');
        }, () => {
          this.$message.error('操作失败');
        });
      },
      handleSearch () {
        let needSearch = true
        this.list.forEach(item => {
          if (item.bangumi_id === this.searchId) {
            this.searchVideos.push(item)
            needSearch = false
          }
        })
        if (!needSearch) {
          return
        }
        this.searchLoading = true
        this.$http.get('/video/search', {
          params: {
            id: this.searchId
          }
        }).then((data) => {
          this.searchVideos = data
          this.searchLoading = false
        }).catch(() => {
          this.$message.error('查询失败，请重试');
          this.searchLoading = false
        })
      }
    }
  }
</script>
