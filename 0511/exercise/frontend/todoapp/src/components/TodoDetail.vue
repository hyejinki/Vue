<template>
  <div>

  </div>
</template>

<script>
export default {
    name : 'TodoList',
    creted() {
        this.$store.dispatch('getTodos')
    }
}
</script>

<style>

</style>