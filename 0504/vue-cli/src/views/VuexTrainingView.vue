<template>
  <div>
    <h2>Veux 연습하기</h2>
    {{ counter }}
    <div>
    <button @click="plusClicked()">+</button>
    <button @click="minusClicked()">-</button>
    </div>
    <hr>
    {{ getCounter }}
  </div>

</template>

<script>
export default {
    name: 'VueTrainingView',
    computed: {
        counter() {
            return this.$store.state.counter
        },
        getCounter() {
            console.log('computed 호출!')
            return this.$store.getters.getPlusCounter
        }
    },
    methods: {
        plusClicked() {
            // this.counter++
            this.$store.dispatch('plusCounter')
            
        }, 
        minusClicked() {
            this.$store.dispatch('minusCounter')
        }   
    },

}
</script>

<style>

</style>