import axios from 'axios'

const service = axios.create({
  // 添加前缀
  // baseURL: '/mock',
  // 超时时间
  timeout: 10000
})
service.interceptors.request.use((config) => {
  return config
}, (error) => {
  // 发送失败 console.log(error);
  Promise.reject(error)
})
service.interceptors.response.use((response) => {
  return response
}, (error) => {
  // 发送失败 console.log(error);
  Promise.reject(error)
})
export default service
