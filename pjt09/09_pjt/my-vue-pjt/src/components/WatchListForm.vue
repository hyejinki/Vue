<template>
  <div>
    <div>
    <h2>보고싶은 영화</h2>
    <input type="text" v-model="ListItem" @keyup.enter="createWatchList()">
    <button @click="createWatchList()">Add</button>
    </div>

    <div v-for="(item, index) in watchList" :key="index">
      <WatchListItem :item="item"/>
    </div>
  </div>
 
</template>

<script>
import WatchListItem from './WatchListItem.vue'

export default {
  name: 'WatchListForm',
  data () {
    return {
      ListItem: '',
      watchList: []
    }
  },
  components: {
    WatchListItem
  },  
  methods: {
    createWatchList() {
      if (this.ListItem) {
        this.watchList.push(this.ListItem)
        // console.log('dd')
        this.ListItem = ''

      }
    }
  }
  
}
</script>

<style>

</style>