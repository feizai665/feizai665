import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/article',
    component:()=>import('@/components/Home'),
    children:[
      {
        path:'article',
        name: "Article",
        component:()=>import('@/components/Article')
      },
      {
        path:'recruitment',
        name: "Recruitment",
        component:()=>import('@/components/Recruitment')
      },
      
    ]
 },
/*  {
    path: '/register',
    name: 'Register',
    component:()=>import('@/login/Register')
 },
 {
  path: '/article',
  name: 'Article',
  component:()=>import('@/components/article')
 } */
/*   {
    path:'/laozhang',
    name: 'Laozhang',
    component:()=>import('@/components/Laozhang')
  } */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
