<style lang="scss" scoped="">

</style>

<template>
  <section>
    <el-table
      :data="list"
      class="main-view"
      border>
      <el-table-column label="名称">
        <template slot-scope="scope">
          <a :href="$href(`album/${scope.row.id}`)" target="_blank">{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column width="100" label="编辑">
        <template slot-scope="scope">
          <el-button type="primary" @click="beginEditItem(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column width="300" label="排序">
        <template slot-scope="scope">
          <el-button type="primary" :disabled="!scope.$index" @click="move(scope.$index, false)">上移</el-button>
          <el-button type="primary" :disabled="scope.$index === list.length - 1" @click="move(scope.$index, true)">下移</el-button>
          <el-button type="primary" :disabled="!scope.$index" @click="toTop(scope.$index)">置顶</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br>
    <br>
    <br>
    <v-modal
      v-if="editingItem"
      v-model="toggleEditModal"
      header-text="编辑"
      @submit="submitCartoonEdit"
    >
      <el-form label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="editingItem.name"></el-input>
        </el-form-item>
        <el-form-item label="封面">
          <el-upload
            action="http://up.qiniu.com"
            :data="uploadHeaders"
            :show-file-list="false"
            :on-success="handleUpUploadSuccess"
            :before-upload="beforeUpload">
            <el-button type="text">
              <i class="el-icon-plus"></i>
              上传
            </el-button>
            <el-popover
              ref="popoverPoster"
              placement="right"
              width="200"
              trigger="hover">
              <img :src="$resize(editingItem.url)" alt="">
            </el-popover>
            <a type="text" :href="$resize(editingItem.url)" target="_blank" v-popover:popoverPoster>
              <i class="el-icon-view"></i>&nbsp;预览
            </a>
          </el-upload>
        </el-form-item>
      </el-form>
    </v-modal>
    <el-col :span="3" :offset="19">
      <el-button type="primary" @click="submitForm">确认编辑</el-button>
    </el-col>
  </section>
</template>

<script>
  export default {
    name: 'edit-bangumi-cartoon',
    computed: {
      id () {
        return this.$route.params.id
      }
    },
    data () {
      return {
        loading: true,
        list: [],
        editingItem: null,
        toggleEditModal: false,
        uploadHeaders: {
          token: '',
          key: ''
        }
      }
    },
    created () {
      this.getUptoken()
      this.getData()
    },
    methods: {
      getUptoken() {
        this.$http.get('/image/uptoken').then((token) => {
          this.uploadHeaders.token = token
        })
      },
      getData () {
        this.$http.post('/bangumi/cartoonDetail', {
          id: this.id
        }).then((data) => {
          this.list = data.data
          this.loading = false
        }).catch(() => { this.$message.error('数据加载错误') })
      },
      beforeUpload(file) {
        const isFormat = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt1M = file.size / 1024 / 1024 < 5;

        if (!isFormat) {
          this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
        }
        if (!isLt1M) {
          this.$message.error('上传头像图片大小不能超过 5MB!');
        }
        if (isFormat && isLt1M) {
          this.$message.info('上传中，请稍候...');
        }

        this.uploadHeaders.key = `bangumi/${this.editingItem.bangumi_id}/cartoon/poster/${this.editingItem.id}/${new Date().getTime()}-${Math.random().toString(36).substring(3, 6)}.${file.type.split('/').pop()}`;
        return isFormat && isLt1M;
      },
      handleUpUploadSuccess(res, file) {
        this.$message.success('上传成功');
        this.editingItem.url = res.key
      },
      move (index, toNext) {
        const prev = toNext ? index : index - 1;
        const next = toNext ? index + 1 : index;
        this.list.splice(prev, 1, ...this.list.splice(next, 1, this.list[prev]))
      },
      toTop (index) {
        const top0 = this.list[0]
        this.$set(this.list, 0, this.list[index])
        this.$set(this.list, index, top0)
      },
      submitForm () {
        this.$http.post('/bangumi/cartoonSort', {
          id: this.id,
          cartoon: this.list.map(_ => _.id).join(',')
        }).then(() => {
          this.$message.success('更新成功')
        }).catch((err) => {
          this.$message.error('数据更新失败')
          console.log(err)
        })
      },
      beginEditItem (item) {
        this.editingItem = {
          id: item.id,
          name: item.name,
          url: item.url.split('image.calibur.tv/').pop(),
          bangumi_id: item.bangumi_id
        }
        this.toggleEditModal = true
      },
      submitCartoonEdit () {
        this.$http.post('/bangumi/cartoonEdit', {
          id: this.editingItem.id,
          name: this.editingItem.name,
          url: this.editingItem.url
        }).then(() => {
          this.toggleEditModal = false
          this.$message.success('更新成功')
          this.list.forEach((item, index) => {
            if (item.id === this.editingItem.id) {
              this.list[index].name = this.editingItem.name
              this.list[index].url = this.editingItem.url
            }
          })
        }).catch((err) => {
          this.$message.error('数据更新失败')
          console.log(err)
        })
      }
    }
  }
</script>
