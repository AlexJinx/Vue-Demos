// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement) {

    // 语法:
    // createElement('标签名', { 标签的属性 }, ['']), 第三个参数中还可以传入 createElement 方法


    

    // 1. 传入自定义元素
    return createElement('h2', { class: 'box' }, 'hello world');

    // 2. 传入组件
    // return createElement(App);
  }
})
