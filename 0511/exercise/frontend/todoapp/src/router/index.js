import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoListView from '@/views/TodoListView'
import TodoCreateView from '@/views/TodoCreateView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todos', 
    name: 'todolist', 
    component: TodoListView
  }, 
  {
    path: '/todos/create', 
    name: 'todocreate',
    component: TodoCreateView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
