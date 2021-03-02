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
      component: HelloWorld,
      redirect:"/banji"
    },
    {
      path:"/banji",
      name:"banji",
      component: () => import ("@/components/banji/index.vue")
    },
    {
      path:"/kecheng",
      name:"kecheng",
      component:()=>import("@/components/kecheng/index.vue")
    },
    {
      path:"/kaoqin",
      name:"kaoqin",
      component:()=>import("@/components/kaoqin/index.vue")
    },
    {
      path:"/keshi",
      name:"keshi",
      component:()=>import("@/components/keshi/index.vue")
    },
    {
      path:"/xueyuan",
      name:"xueyuan",
      component:()=>import("@/components/xueyuan/index.vue")
    }

  ]
})
