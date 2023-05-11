<template>
<div>
    <h2>할 일 목록</h2>
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
        .then((res) => {
            console.log(res)
        }).catch((err) =>{
            console.log(err)
        })
    }
}
</script>

<style>

</style>