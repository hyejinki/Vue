<template>
  <div>
    <h2>Todo List</h2>
    <TodoList/>
  </div>
</template>

<script>
import axios from 'axios'
import TodoList from '../components/TodoList.vue'

export default {
    name: 'TodoListView',
    components: {
      TodoList
    },  
    created() {
      const BACKEND_URL = 'http://localhost:8000/todos/test/'
      axios.get(BACKEND_URL)
      .then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    }

}
</script>

<style>

</style>