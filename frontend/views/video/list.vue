<template>
  <section>
    <header>
      <router-link to="/video/create">
        <el-button type="primary" icon="plus" size="large">新建视频</el-button>
      </router-link>
    </header>
    <el-table
      :data="filter"
      class="main-view"
      v-loading="loading"
      border
      highlight-current-row>
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
            @click="handleEditOpen(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            icon="delete"
            :type="scope.row.deleted_at ? 'warning' : 'danger'"
            @click="handleDelete(scope.$index, scope.row)">{{ scope.row.deleted_at ? '恢复' : '删除' }}</el-button>
        </template>
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
              <el-select v-model="editForm.bname" placeholder="请选择">
                <el-option
                  v-for="item in bangumis"
                  :key="item.id"
                  :value="item.name"
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
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="pagination.curPage"
        :page-sizes="[24, 50, 100]"
        :page-size="pagination.pageSize"
        :pageCount="pagination.totalPage"
        :total="list.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </footer>
  </section>
</template>

<script>
  const defaultResource = {
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
  };
  export default {
    computed: {
      filter () {
        const begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
        return this.list.slice(begin, begin + this.pagination.pageSize)
      }
    },
    data () {
      return {
        loading: true,
        list: [],
        bangumis: [],
        pagination: {
          totalPage: 0,
          pageSize: 24,
          curPage: 1
        },
        showEditorModal: false,
        showCreateModal: false,
        dialogTitle: '',
        editIndex: 0,
        editForm: {
          id: '',
          bangumi_id: '',
          bname: '',
          name: '',
          part: '',
          poster: '',
          url: '',
          resource: defaultResource
        },
        CDNPrefix: 'https://image.calibur.tv/'
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
          this.pagination.totalPage =  Math.ceil(this.list.length / this.pagination.pageSize)
          this.loading = false
        })
      },
      handleSizeChange(val) {
        this.pagination.pageSize = val
      },
      handleCurrentChange(val) {
        this.pagination.curPage = val
      },
      handleEditOpen(index, row) {
        this.dialogTitle = row.name;
        this.editIndex = index + ((this.pagination.curPage - 1) * this.pagination.pageSize)

        Object.keys(row).forEach(key => {
          this.editForm[key] = row[key]
        })
        this.editForm.resource = row.resource ? this.$deepAssign(defaultResource, row.resource) : defaultResource

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
        this.$http.post('/video/edit', this.editForm).then(() => {
          Object.keys(this.editForm).forEach(key => {
            this.list[this.editIndex][key] = this.editForm[key]
          })
          this.showEditorModal = false;
          this.$message.success('操作成功');
        }, () => {
          this.$message.error('操作失败');
        });
      },
      handleDelete(index, row) {
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
            this.list[index].deleted_at = isDeleted ? null : moment().format('YYYY-MM-DD H:m:s');
            this.$message.success('操作成功');
          }, (err) => {
            this.$message.error('操作失败');
            console.log(err);
          });
        })
      }
    }
  }
</script>
