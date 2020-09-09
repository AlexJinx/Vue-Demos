import Vue from 'vue'
import App from './App'
import axios from 'axios'

import { request, instanceHandleCallBack, instanceHandleCallBackSimple, instanceForPromise } from './network/request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


/* 全局调用方法
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })


// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: '1'
//   }
// }).then(res => {
//   console.log(res);
// })


// axios.all([
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata',
//     method: 'get'
//   }),
//   axios({
//     url: 'http://123.207.32.32:8000/home/data',
//     params: {
//       type: 'pop',
//       page: '1'
//     }
//   })
// ]).then(ressults => {
//   console.log(ressults);
// })
*/


/* 通过创建 axios 实例来请求
 //创建axios实例
const instanceOne = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 4000
})

//通过实例来请求接口
instanceOne({
  url: '/home/multidata',
}).then(res => {
  console.log(res);
})

instanceOne({
  url: '/home/data',
  params: {
    type: 'pop',
    page: '1'
  }
}).then(res => {
  console.log(res);
})
 */


/* 通过调用封装的手写回调
instanceHandleCallBack({ url: '/home/multidata' },
  res => {
    console.log(res);
  }, err => {
    console.log(err);
  })
 */

/*通过调用封装的手写回调(简化)
 instanceHandleCallBackSimple({
 baseConfig: {
   url: '/home/multidata'
 },
 success: res => {
   console.log(res);
 },
 failrue: err => {
   console.log(err);
 }
})
 */


instanceForPromise({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})




