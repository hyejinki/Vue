import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoCreateView from '@/views/TodoCreateView'
import TodoListView from '@/views/TodoListView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/todos',
    name: 'todo-list',
    component: TodoListView

  }, 
  {
    path: '/todos/create',
    name: 'create',
    component: TodoCreateView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
