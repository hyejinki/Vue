<template>
  <div>
    <p>{{ todo.id }} 번 째 할 일</p>
    <p>{{ todo.title }}</p>
    <hr>
  </div>
</template>

<script>
export default {
    name: 'TodoDetail',
    props: {
        todo: Object
    }

}
</script>

<style>

</style>