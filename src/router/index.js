import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Layout from '../layout/index.vue';
import home from '../views/Home.vue'

const routes = [
   {
      path: '/',
      redirect: "/Layout/home",
    },{
        path:'/Layout',
        name:"layout",
        component:Layout,
        children:[
            {
                path:'home',
                component:home
            },
            {
                path:'Aboutus',
                component:()=>import('@/views/Aboutus/index.vue')
            },{
                path:'followYourHeart',
                component:()=>import('@/views/followYourHeart/index.vue')
            },
            {
               path:'yearsOfLife',
               component:()=>import('@/views/yearsOfLife/index.vue')
            },
            {
               path:'technology',
               component:()=>import('@/views/technology/index.vue')
            },
            {
               path:'wzArticle',
               component:()=>import('@/views/wzArticle/index.vue')
            },
        ]
    }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
