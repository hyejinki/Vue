<template>

    <div>
      <h2>로또</h2>
      <p>{{ lottoNumbers }}</p>

      <h3>추천 받고 싶은 숫자의 수</h3>
      <input type="number" v-model.number="count" @keyup.enter="goLotto">
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'TheLunch',
    computed:{
    lottoNumbers() {
        const numbers = _.range(1, 46)
        
        const lottoNumbers = _.sampleSize(numbers, this.$route.params.count)

        const sortedLottoNumbers = _.sortBy(lottoNumbers)

        return sortedLottoNumbers
    }
    }, 
    data() {
    return{
        count: 6
    }
    }, 
    methods: {
    goLotto() {
        this.$router.push(`/lotto/${this.count}`).catch(() => {})
    }
    }
}
</script>

<style>

</style>