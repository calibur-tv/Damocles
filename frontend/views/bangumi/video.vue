<template>
  <section>
    <header>
      <el-button type="primary" icon="plus" size="large" @click="showCreateModal = true">新建视频</el-button>
    </header>
    <el-table
      :data="filter"
      class="main-view"
      v-loading="loading"
      border
      highlight-current-row>
      <el-table-column type="expand">
        <template scope="props">
          <el-form label-position="left" inline>
            <div>
              <el-form-item label="视频 ID">
                <span v-text="props.row.id"></span>
              </el-form-item>
              <el-form-item label="番剧 ID">
                <span v-html="props.row.bangumi_id"></span>
              </el-form-item>
            </div>
            <div>
              <el-form-item label="海报">
                <span style="cursor: pointer;" v-text="`https://cdn.riuir.com/${props.row.poster}`" @click="preview(props.row.poster)"></span>
              </el-form-item>
            </div>
            <div>
              <el-form-item label="播放量">
                <span v-text="props.row.count_played"></span>
              </el-form-item>
              <el-form-item label="评论数">
                <span v-text="props.row.count_comment"></span>
              </el-form-item>
            </div>
            <div>
              <el-form-item label="创建时间">
                <span v-text="props.row.created_at"></span>
              </el-form-item>
              <el-form-item label="更新时间">
                <span v-text="props.row.updated_at"></span>
              </el-form-item>
              <el-form-item v-if="props.row.deleted_at" label="删除时间">
                <span v-text="props.row.deleted_at"></span>
              </el-form-item>
            </div>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        sortable
        width="100"
        label="索引">
      </el-table-column>
      <el-table-column
        prop="bname"
        label="番名">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称">
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
        <template scope="scope">
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
                <template slot="prepend">https://cdn.riuir.com/</template>
              </el-input>
            </el-col>
            <el-col :span="4" :offset="1" v-if="editForm.resource.video[720].src">
              字幕：<el-switch on-text="" off-text="" v-model="editForm.resource.video[720].useLyc"></el-switch>
            </el-col>
          </el-form-item>
        </template>
        <template>
          <el-form-item label="1080P 资源" :label-width="'85px'">
            <el-col :span="18">
              <el-input v-model.trim="editForm.resource.video[1080].src" auto-complete="off">
                <template slot="prepend">https://cdn.riuir.com/</template>
              </el-input>
            </el-col>
            <el-col :span="4" :offset="1" v-if="editForm.resource.video[1080].src">
              字幕：<el-switch on-text="" off-text="" v-model="editForm.resource.video[1080].useLyc"></el-switch>
            </el-col>
          </el-form-item>
        </template>
        <el-form-item label="外链资源" :label-width="'85px'">
          <el-input v-model.trim="editForm.url" auto-complete="off">
            <template slot="prepend">https://cdn.riuir.com/</template>
          </el-input>
        </el-form-item>
        <el-form-item label="海报" :label-width="'85px'">
          <el-input v-model.trim="editForm.poster" auto-complete="off">
            <template slot="prepend">https://cdn.riuir.com/</template>
          </el-input>
        </el-form-item>
        <el-form-item label="字幕" :label-width="'85px'">
          <el-input v-model.trim="editForm.resource.lyric.zh" auto-complete="off">
            <template slot="prepend">https://cdn.riuir.com/</template>
          </el-input>
        </el-form-item>
      </el-form>
    </v-modal>
    <v-modal class="video-create-modal"
             v-model="showCreateModal"
             :header-text="'新建视频'"
             @submit="handleCreateDone">
      <el-form :model="createForm">
        <el-row>
          <el-col :span="8">
            <el-form-item label="番剧" :label-width="'85px'">
              <el-select v-model="createForm.bname" placeholder="请选择">
                <el-option
                  v-for="item in bangumis"
                  :key="item.id"
                  :value="item.name"
                  :disabled="!!item.deleted_at">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="集数" :label-width="'85px'">
              <el-input v-model.trim="createForm.part" placeholder="m-n" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="名称" :label-width="'85px'">
              <el-input v-model.trim="createForm.bangumiEnglishName" placeholder="${name}" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="画质" :label-width="'85px'">
          <div>
            <el-checkbox v-model="createForm.P720.show">720P</el-checkbox>
            <el-checkbox v-model="createForm.P1080.show">1080P</el-checkbox>
          </div>
        </el-form-item>
        <el-row v-if="createForm.P720.show">
          <el-form-item label="720P 资源" :label-width="'85px'">
            <el-col :span="18">
              <el-input v-model.trim="createForm.P720.src" auto-complete="off">
                <template slot="prepend">https://cdn.riuir.com/</template>
              </el-input>
            </el-col>
            <el-col :span="4" :offset="1">
              字幕：<el-switch on-text="" off-text="" v-model="createForm.P720.useLyc"></el-switch>
            </el-col>
          </el-form-item>
        </el-row>
        <el-row v-if="createForm.P1080.show">
          <el-form-item label="1080P 资源" :label-width="'85px'">
            <el-col :span="18">
              <el-input v-model.trim="createForm.P1080.src" auto-complete="off">
                <template slot="prepend">https://cdn.riuir.com/</template>
              </el-input>
            </el-col>
            <el-col :span="4" :offset="1">
              字幕：<el-switch on-text="" off-text="" v-model="createForm.P1080.useLyc"></el-switch>
            </el-col>
          </el-form-item>
        </el-row>
        <el-form-item v-if="!createForm.P720.show && !createForm.P1080.show" label="外链资源" :label-width="'85px'">
          <el-input v-model.trim="createForm.url" auto-complete="off">
            <template slot="prepend">https://cdn.riuir.com/</template>
          </el-input>
        </el-form-item>
        <el-form-item label="海报" :label-width="'85px'">
          <el-input v-model.trim="createForm.poster" auto-complete="off">
            <template slot="prepend">https://cdn.riuir.com/</template>
          </el-input>
        </el-form-item>
        <el-form-item v-if="createForm.P720.useLyc || createForm.P1080.useLyc" label="字幕" :label-width="'85px'">
          <el-input v-model.trim="createForm.lyric.zh" auto-complete="off">
            <template slot="prepend">https://cdn.riuir.com/</template>
          </el-input>
        </el-form-item>
        <el-form-item label="名称" :label-width="'85px'">
          <el-input v-model.trim="createForm.name" type="textarea" placeholder="一行一个" auto-complete="off"></el-input>
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
  const defaultCreateForm = {
    P720: {
      show: false,
      useLyc: false,
      src: 'bangumi/${name}/video/720/${n}.mp4'
    },
    P1080: {
      show: false,
      useLyc: false,
      src: 'bangumi/${name}/video/1080/${n}.mp4'
    },
    lyric: {
      zh: 'bangumi/${name}/lyric/zh/${n}.vtt',
      en: 'bangumi/${name}/lyric/en/${n}.vtt'
    },
    bangumiEnglishName: '',
    bname: '',
    name: '',
    part: '',
    url: 'bangumi/${name}/video/${n}.mp4',
    poster: 'bangumi/${name}/poster/${n}.jpg',
  }
  export default {
    name: 'v-page-bangumi-video',
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
        createForm: defaultCreateForm,
        CDNPrefixp: 'https://cdn.riuir.com/'
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
      preview(url) {
        if (url) {
          window.open(`${this.CDNPrefixp}${url}`)
        }
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
      },
      handleCreateCancel() {
        this.createForm = defaultCreateForm
        this.showCreateModal = false
      },
      handleCreateDone() {
        const part = this.createForm.part.split('-');
        if (!this.createForm.bname) {
          this.$message.warning('先选择番剧');
          return;
        }
        if (part.length !== 2) {
          this.$message.warning('集数不符合规范');
          return;
        }
        const [begin, end] = [part[0] - 0, part[1] - 0];
        const length = end - begin + 1;
        if (length <= 0 || begin <= 0) {
          this.$message.warning('集数不符合规范');
          return;
        }
        const bangumiEnglishName = this.createForm.bangumiEnglishName.toLowerCase();
        if (bangumiEnglishName === '') {
          this.$message.warning('未填写番剧英文名');
          return;
        }
        const names = this.createForm.name.split('\n');
        if (names.length !== length) {
          this.$message.warning('名称个数不对');
          return;
        }
        let arr = [], j =0;
        const bangumi_id = this.computedBangumiId(this.createForm.bname);
        const use720P = this.createForm.P720.show;
        const use1080P = this.createForm.P1080.show;
        const use720Lyc = this.createForm.P720.useLyc;
        const use1080Lyc = this.createForm.P1080.useLyc;
        const useOuterResource = !(use720P || use1080P);
        const useLyric = use720Lyc || use1080Lyc;
        for (let i = begin; i <= end; i++) {
          const resource = useOuterResource ? '' : {
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
          if ( ! useOuterResource) {
            if (use720P) {
              resource.video['720'] = {
                src: this.createForm.P720.src.replace('${n}', i).replace('${name}', bangumiEnglishName),
                useLyc: use720Lyc
              };
            }
            if (use1080P) {
              resource.video['1080'] = {
                src: this.createForm.P1080.src.replace('${n}', i).replace('${name}', bangumiEnglishName),
                useLyc: use1080Lyc
              };
            }
          }
          if (useLyric) {
            // 这里默认只写入中文字体
            resource.lyric = {
              'zh': this.createForm.lyric.zh.replace('${n}', i).replace('${name}', bangumiEnglishName)
            }
          }
          arr.push({
            'resource': resource,
            'bangumi_id': bangumi_id,
            'part': i,
            'name': names[j++],
            'poster': this.createForm.poster.replace('${n}', i).replace('${name}', bangumiEnglishName),
            'url': useOuterResource
              ? this.createForm.url.replace('${n}', i).replace('${name}', bangumiEnglishName)
              : ''
          });
        }
        this.$http.post('/video/create', { arr }).then(() => {
          this.$message.success('操作成功');
          this.handleCreateCancel();
        }, (err) => {
          this.$message.error('操作失败');
          console.log(err);
        });
      }
    }
  }
</script>
