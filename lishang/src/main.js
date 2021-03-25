// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import format from "../config/time.js"
import axios from 'axios'
Vue.use(ElementUI)
Vue.config.productionTip = false
import HttpRequest from "./http/http.js";
import img from '@/http/img.js';
Vue.http = Vue.prototype.$http = HttpRequest;
// import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'
Vue.prototype.$img=img;
//转换时间
Vue.format = Vue.prototype.$format = format
Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
