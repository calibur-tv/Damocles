import axios from 'axios'

const http = axios.create({
  headers: {
    'Accept': 'application/json',
    'X-CSRF-TOKEN': document.getElementById('_csrf') && document.getElementById('_csrf').getAttribute('content')
  },
  timeout: 10000
})

http.interceptors.request.use((config) => {
  return document.getElementById('__orz') ? config : null
})

http.interceptors.response.use((res) => {
  return res && res.data
}, (err) => {
  if (err.response && err.response.status === 401) {
    alert('登录超时，请重新登录')
    window.location = '/'
    return
  }
  return err.response ? Promise.reject(err.response.data) : Promise.reject(err)
})

export default http
