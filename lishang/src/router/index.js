import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import banji from '@/components/banji/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/banji",
      name:"banji",
      component: () => import ("@/components/banji/index.vue")
    }
  ]
})
