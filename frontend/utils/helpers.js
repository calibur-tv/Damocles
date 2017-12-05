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

    Vue.prototype.$CDNPrefix = 'https://image.calibur.tv/'

    Vue.prototype.$imageGrayLevel = (ele, hgt = 0) => {
      if (typeof window === 'undefined' || !ele) {
        return 0
      }

      let [data, width, height, length, i = -4, count = 0] = []

      const getRGB = (reallyImage) => {
        const canvas = document.createElement('canvas')
        const context = canvas.getContext && canvas.getContext('2d')
        const rgb = { r: 0, g: 0, b: 0 }
        const blockSize = 5 // only visit every 5 pixels

        height = canvas.height = hgt || reallyImage.naturalHeight || reallyImage.offsetHeight || reallyImage.height
        width = canvas.width = reallyImage.naturalWidth || reallyImage.offsetWidth || reallyImage.width

        try {
          context.drawImage(reallyImage, 0, 0, width, height)
        } catch (e) {
          return rgb
        }

        try {
          data = context.getImageData(0, 0, width, height)
        } catch (e) {
          return rgb
        }

        length = data.data.length

        while ((i += blockSize * 4) < length) {
          ++count
          rgb.r += data.data[i]
          rgb.g += data.data[i + 1]
          rgb.b += data.data[i + 2]
        }

        rgb.r = ~~(rgb.r / count)
        rgb.g = ~~(rgb.g / count)
        rgb.b = ~~(rgb.b / count)
        return rgb
      }

      const getGray = (rgb) => {
        return rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114
      }

      return parseInt(getGray(getRGB(ele)), 10)
    }
  }
}
