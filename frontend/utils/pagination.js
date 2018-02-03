import Vue from 'vue';

Vue.mixin({
  data () {
    return {
      _pagination: {
        totalPage: 0,
        pageSize: 1000,
        curPage: 1
      }
    }
  },
  computed: {
    _filter () {
      if (!this.list) {
        console.log('没有声明 list');
        return []
      }
      const begin = (this._pagination.curPage - 1) * this._pagination.pageSize;
      return this.list.slice(begin, begin + this._pagination.pageSize)
    }
  },
  methods: {
    _handleSizeChange(val) {
      this._pagination.pageSize = val
    },
    _handleCurrentChange(val) {
      this._pagination.curPage = val
    },
    _currentIndex(index) {
      return index + (this._pagination.curPage - 1) * this._pagination.pageSize
    }
  }
});
