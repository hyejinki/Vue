import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView'
import ProfileView from '@/views/ProfileView'
import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter(to, from, next) {
      if(store.getters.isLoggedIn) {
        alert('이미 로그인됨!')
        next({ name: 'home'})
      }
      next()
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters.isLoggedIn
  // 로그인이 필요한 페이지 목록
  const loginRequired = ['profile']
  if(loginRequired.includes(to.name) && !isLoggedIn) {
    alert('로그인이 필요한 서비스입니다!')
    next({ name: 'login'})
  }
  next()
})

export default router
