import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import banji from '@/components/banji/index'


import dateTime from "../../api/time.js"
//  Vue.filter("dateFormatHHmm",dateTime["dateFormatHHmm"]);
//  Vue.filter("dateFormatYYmmdd",dateTime["dateFormatYYmmdd"]);
for(let key in dateTime){
  Vue.filter(key,dateTime[key]);
}


Vue.use(Router)
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:"/banji",
    
      children:[
        {
          path:"/banji",
          // name:"banji",
          component: () => import ("@/components/banji/index.vue")
        },
        {
          path:"/kecheng",
          // name:"kecheng",
          component:()=>import("@/components/kecheng/index.vue")
        },
        {
          path:"/kaoqin",
          // name:"kaoqin",
          component:()=>import("@/components/kaoqin/index.vue")
        },
        {
          path:"/keshi",
          // name:"keshi",
          component:()=>import("@/components/keshi/index.vue")
        },
        {
          path:"/xueyuan",
          // name:"xueyuan",
          component:()=>import("@/components/xueyuan/index.vue")
        }
      ]
    },
   
    {
      path: '/login',
      // name: 'HelloWorld',
      component:()=>import("@/components/login.vue"),
    }
   

  ],
  // methods:{



  // }
})
