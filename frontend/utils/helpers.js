import http from './api'
import deepAssign from 'deep-assign';

export default {
  install (Vue, options) {
    Vue.prototype.$http = http

    Vue.prototype.$deepAssign = deepAssign

    Vue.prototype.$resize = (url, options = {}) => {
      if (url === '') {
        return ''
      }
      const canUseWebP = () => {
        if (Vue.prototype.$isServer) {
          return false
        }
        if (window.supportWebP !== undefined) {
          return window.supportWebP
        }

        const elem = document.createElement('canvas')

        if (elem.getContext && elem.getContext('2d')) {
          const support = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
          window.supportWebP = support
          return support
        }

        return false
      }

      const format = canUseWebP() ? '/format/webp' : ''

      if (options.width && options.width > 0) {
        const width = `/w/${options.width}`
        const mode = options.mode === undefined ? 1 : options.mode
        const height = options.height ? `/h/${options.height}` : mode === 1 ? `/h/${options.width}` : ''

        return `${url}?imageMogr2/auto-orient/strip|imageView2/${mode}${width}${height}${format}`
      }
      return `${url}?imageMogr2/auto-orient/strip${format}`
    }

    Vue.prototype.$dev = window.location.host !== 'admin.calibur.tv'

    Vue.prototype.$href = (url) => {
      if (window.location.host === 'admin.calibur.tv') {
        return `https://www.calibur.tv/${url}`
      } else if (window.location.host === 't-admin.calibur.tv') {
        return `https://t-www.calibur.tv/${url}`
      } else {
        return `http://www.calibur.dev/${url}`
      }
    }
  }
}
