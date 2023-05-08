<template>
  <div>
    <h3>모든 할 일 리스트</h3>
    <div v-for="(todo, index) in todoList" :key="todo.id">
      {{ index + 1 }} - {{ todo.content }}

    </div>
    <hr>

    <h3>Todo</h3>
    <input type="text" v-model="todoTitle" @keyup.enter="createTodo()">
  </div>
</template>

<script>
export default {
    name: 'AllTodoList',
    computed: {
      todoList() {
        return this.$store.state.todo.todoList
      }
    }, 
    data() {
      return {
        todoTitle: ''
      }
    },
    methods: {
      createTodo() {
      
        if(this.todoTitle){
          this.$store.dispatch('createTodo', this.todoTitle)
        }
        else {
          alert('todo를 입력하세요!')
        }
        this.todoTitle = ''

      }
    }, 
    created() {
      this.$store.dispatch('loadFromLocalstorage')
    }

}
</script>

<style>

</style>