<template>
  <section>
    <header>
      <el-button type="primary" icon="plus" size="large" @click="showCreateModal = true">创建标签</el-button>
    </header>
    <el-table
      :data="filter"
      class="main-view"
      v-loading="loading"
      border
      highlight-current-row>
      <el-table-column
        prop="id"
        sortable
        label="索引">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称">
      </el-table-column>
      <el-table-column
        label="类型">
        <template scope="scope">
          {{ modelFormat(scope.row.model) }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template scope="scope">
          <el-button
            type="primary"
            size="small"
            icon="edit"
            @click="handleEditOpen(scope.$index, scope.row)"
          >编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <v-modal class="tag-editor-modal"
             v-model="showEditorModal"
             :header-text="'标签编辑'"
             @submit="handleEditDone">
      <el-form :model="editForm">
        <el-form-item label="名称" :label-width="'60px'">
          <el-input v-model.trim="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
    </v-modal>
    <v-modal class="tag-creator-modal"
             v-model="showCreateModal"
             :header-text="'创建标签'"
             @submit="handleCreateDone">
      <el-form :model="createForm">
        <el-form-item label="类型" :label-width="'60px'">
          <el-select v-model="createForm.model" placeholder="请选择">
            <el-option
              v-for="model in models"
              :key="model.id"
              :value="model.name">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称" :label-width="'60px'">
          <el-input v-model.trim="createForm.name" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
    </v-modal>
    <footer>
      <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="pagination.curPage"
        :page-sizes="[20, 50, 100]"
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
  export default {
    name: 'v-page-bangumi-tag',
    computed: {
      filter () {
        const begin = (this.pagination.curPage - 1) * this.pagination.pageSize;
        return this.list.slice(begin, begin + this.pagination.pageSize)
      }
    },
    data () {
      return {
        list: [],
        pagination: {
          totalPage: 0,
          pageSize: 20,
          curPage: 1
        },
        models: [
          {
            id: '0',
            name: '番剧'
          }
        ],
        showEditorModal: false,
        showCreateModal: false,
        editForm: {
          index: '',
          name: '',
          id: '',
          model: ''
        },
        createForm: {
          name: '',
          model: ''
        },
        loading: true
      }
    },
    created () {
      this.getTags()
    },
    methods: {
      getTags() {
        this.$http.get('/bangumi/tags').then((data) => {
          this.list = data
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
      modelFormat(key) {
        for (const model of this.models) {
          if (model.name === key) {
            return model.id
          }
          if (model.id === key) {
            return model.name
          }
        }
      },
      handleEditOpen(index, row) {
        this.editForm = {
          index: index,
          id: row.id,
          name: row.name,
          model: row.model
        };
        this.showEditorModal = true;
      },
      handleEditDone() {
        this.$http.post('/tag/edit', {
          id: this.editForm.id,
          name: this.editForm.name,
          model: this.editForm.model
        }).then(() => {
          const index = this.editForm.index + ((this.pagination.curPage - 1) * this.pagination.pageSize);
          this.list[index] = this.editForm;
          this.showEditorModal = false;
          this.$message.success('操作成功');
        }, (err) => {
          this.$message.error('操作失败');
          console.log(err);
        });
      },
      handleCreateDone() {
        for (const tag of this.list) {
          if (tag.name === this.createForm.name) {
            this.$message({
              message: '标签已存在',
              type: 'warning'
            });
            return;
          }
        }
        this.$http.post('/tag/create', {
          name: this.createForm.name,
          model: this.modelFormat(this.createForm.model)
        }).then((data) => {
          this.list.push({
            id: data,
            name: this.createForm.name,
            model: this.modelFormat(this.createForm.model)
          });
          this.showCreateModal = false;
          this.$message.success('操作成功');
          this.createForm = {
            name: '',
            model: ''
          }
        }, (err) => {
          this.$message.error('操作失败');
          console.log(err);
        });
      }
    }
  }
</script>
