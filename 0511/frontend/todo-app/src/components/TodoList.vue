<template>
  <div>
    <div v-if="todos">
        <div v-for="todo in todos" :key="todo.id">
            <TodoDetail :todo="todo"/>
        </div>
    </div>
    <div v-else>
        <p>로딩 중...</p>
    </div>
  </div>
</template>

<script>
import TodoDetail from './TodoDetail.vue'

export default {
    name :'TodoList',
    components: {
        TodoDetail
    },
    created() {
        this.$store.dispatch('getTodos')
    }, 
    computed: {
        todos() {
            return this.$store.state.todos.length === 0 ? 
            false : this.$store.state.todos
        }
    }
}
</script>

<style>

</style>