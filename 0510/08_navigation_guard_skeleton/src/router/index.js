import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '@/views/HelloView.vue'
import LoginView from '@/views/LoginView'
import NotFound404 from '@/views/NotFound404'
import DogView from '@/views/DogView'


Vue.use(VueRouter)
const ifLoggedIn = true

const routes = [
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404,
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hello/:userName',
    name: 'hello',
    component: HelloView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter(to, from , next) {
      if (ifLoggedIn === true) {
        console.log('이미 로그인 함')
        next({ name: 'home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/dog/:breed',
    name: 'dog',
    component: DogView,
  },
  {
    path:'*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router/index.js
// router.beforeEach((to, from, next) => {

//   // 로그인 여부
//   // const isLoggedIn = true // 로그인 됨
//   const isLoggedIn = false // 로그인 안됨

//   // 로그인이 필요한 페이지 지정
//   //  const authPages = ['hello']

//   // 로그인 안해도 되는 페이지
//   const allowAuthPages = ['login']

//   // 앞으로 이동할 페이지 (to)가 로그인이 필요한 페이지인지 확인
//   const isAuthRequired = !allowAuthPages.includes(to.name)

//   if (isAuthRequired && !isLoggedIn) {
//     console.log('Login으로 이동')
//     next({ name: 'login'})
//   } else {
//     console.log('to로 이동!')
//     next()
//   }
  
// })
export default router
