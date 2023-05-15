<template>
  <div>
    <li :class="{'completed': completed }" @click="toggleItem">{{ item }}</li>
  </div>
</template>

<script>
export default {
  name: 'WatchListItem',
  props :{
    item : Object
  },
  data () {
    return {
      completed : false
    }
  },
  methods: {
    toggleItem() {
      this.completed = !this.completed
    }
  }
}
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>