<template>
  <div>
    <div v-if="todos">
        <div v-for="todo in todos" :key="todo.id">
            <TodoDetail />

        </div>
    </div>
    <div v-else>
        <p>로딩중!!!</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TodoList', 
    created() {
        this.$store.dispatch('getTodos')
    },
    computed : {
        todos() {
            return this.$store.state.todos.length === 0 ?
            false : this.$store.state.todos
        }
    }

}
</script>

<style>

</style>