<template>

  <div>
    <h2>점심메뉴</h2>
    <p>{{ recommendMenu }}</p>
    <button @click="refresh">새로고침</button>
  </div>
</template>

<script>

import _ from 'lodash'
export default {
    name: 'TheLunch',
    data() {
        return {
            menus: ['떡보끼', '설빙', '굽네 오리지널', '초밥', '왕돈까스']
        }
    }, 
    computed: {
        recommendMenu() {
            return _.sample(this.menus)
        }
    }, 
    methods: {
        refresh() {
            // location.reload()
            this.$router.push('/lunch').catch(() => {})
        }
    }
}
</script>

<style>

</style>