<template>
  <section>
    <header>
      <el-button type="primary" icon="plus" size="large" @click="showCreateModal = true">创建合集</el-button>
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
        prop="title"
        label="标题">
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
          <el-input v-model.trim="editForm.name" placeholder="番剧名称的前缀" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="标题" :label-width="'60px'">
          <el-input v-model.trim="editForm.title" placeholder="番剧页面的标题" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
    </v-modal>
    <v-modal class="tag-creator-modal"
             v-model="showCreateModal"
             :header-text="'创建合集'"
             @submit="handleCreateDone">
      <el-form :model="createForm">
        <el-form-item label="名称" :label-width="'60px'">
          <el-input v-model.trim="createForm.name" placeholder="番剧名称的前缀" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="标题" :label-width="'60px'">
          <el-input v-model.trim="createForm.title" placeholder="番剧页面的标题" auto-complete="off"></el-input>
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
    name: 'v-page-collection',
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
        showEditorModal: false,
        showCreateModal: false,
        editForm: {
          index: '',
          name: '',
          id: '',
          title: ''
        },
        createForm: {
          name: '',
          title: ''
        },
        loading: true
      }
    },
    created () {
      this.getData()
    },
    methods: {
      getData() {
        this.$http.get('/bangumi/collection/list').then((data) => {
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
      handleEditOpen(index, row) {
        this.editForm = {
          index: index,
          id: row.id,
          name: row.name,
          title: row.title
        };
        this.showEditorModal = true;
      },
      handleEditDone() {
        if (!this.editForm.title || !this.editForm.name) {
          this.$message({
            message: '不能有空值',
            type: 'warning'
          });
          return;
        }
        this.$http.post('/bangumi/collection/edit', {
          id: this.editForm.id,
          name: this.editForm.name,
          title: this.editForm.title
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
        if (!this.createForm.title || !this.createForm.name) {
          this.$message({
            message: '不能有空值',
            type: 'warning'
          });
          return;
        }
        for (const item of this.list) {
          if (
            item.name === this.createForm.name ||
            item.name === this.createForm.title ||
            item.title === this.createForm.title ||
            item.title === this.createForm.name
          ) {
            this.$message({
              message: '合集已存在',
              type: 'warning'
            });
            return;
          }
        }
        this.$http.post('/bangumi/collection/create', {
          name: this.createForm.name,
          title: this.createForm.title
        }).then((data) => {
          this.list.push({
            id: data,
            name: this.createForm.name,
            title: this.createForm.title
          });
          this.showCreateModal = false;
          this.$message.success('操作成功');
          this.createForm = {
            name: '',
            title: ''
          }
        }, (err) => {
          this.$message.error('操作失败');
          console.log(err);
        });
      }
    }
  }
</script>
