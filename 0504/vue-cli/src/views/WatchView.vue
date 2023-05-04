<template>
    <div>
        <h2>시계는 와치</h2>
        <p>카운터: {{ counter }} </p>
        <div>
            <button @click="numPlus()">+</button>
            <button @click="numMinus()">-</button>
        </div>
        <p>베스트: {{ bestValue }}</p>
        <p>워스트: {{ worstValue }}</p>

  </div>
</template>

<script>
export default {
    name: 'WatchView',
    data() {
        return{
            counter: 0,
            bestValue: 0,
            worstValue: 0,
        }
    },
    methods: {
        numPlus() {
            this.counter++
            // if (this.counter > this.bestValue) {
            //     this.bestValue = this.counter
            // }
        }, 
        numMinus() {
            this.counter--
            // if (this.counter < this.worstValue) {
            //     this.worstValue = this.counter
            // }
        }   
    },
    watch: {
        counter(newValue, oldValue) {
            console.log(`${oldValue} -> ${newValue}`)
            if (this.counter > this.bestValue) {
                this.bestValue = this.counter
            }
            if (this.counter < this.worstValue) {
                this.worstValue = this.counter
            }
        }

    }
  
}  
</script>

<style>

</style>