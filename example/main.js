/*
 * @Description: 未描述
 * @Author: danielmlc
 * @Date: 2019-03-21 11:26:16
 * @LastEditTime : 2020-02-07 16:03:17
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Cube from '../src/index'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

window.Promise = window.Promise || Promise

//  hack the active pseudo-classes failure caused by -webkit-overflow-scrolling touch
FastClick.attach(document.body)
Vue.use(Cube)
Vue.use(VueRouter)
Vue.use(VueLazyload)

/* eslint-disable no-new */
new Vue({
  router,
  render(createElement) {
    return createElement(App)
  }
}).$mount('#app')
