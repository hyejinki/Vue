import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTodoList from '@/components/TodoPage/AllTodoList'
import ImportantTodoList from '@/components/TodoPage/ImportantTodoList'
import TodayTodoList from '@/components/TodoPage/TodayTodoList'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path:'/',
    name: 'AllTodoList',
    component: AllTodoList
  },
  {
    path:'/important',
    name: 'ImportantTodoList',
    component: ImportantTodoList
  },
  {
    path:'/today',
    name: 'TodayTodoList',
    component: TodayTodoList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
