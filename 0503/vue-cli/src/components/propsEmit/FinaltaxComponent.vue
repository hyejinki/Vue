<template>
<div>
    <h2>결정세액 : {{ finalTax }}</h2>
    <button @click="disCount()">클릭 시 10만원 공제</button>
</div>
  
</template>

<script>
export default {
    name: 'FinaltaxComponent',
    props: {
        afterTax: Number,
        taxCredit: Number
    },
    data() {
        return {
            // 코드만 보면 전혀 문제가 없느느데?
            // 0으로 초기화가 된다.
            // finalTax: this.afterTax - this.taxCredit

            finalTaxData: 0
        }
    },
    computed: {
        finalTax() {
            return this.afterTax - this.taxCredit
        }
    }, 
    methods: {
        disCount() {
            // computed 속성의 데이터는 직접 변경이 기본적으로 불가능
            if (this.finalTaxData === 0){
                this.finalTaxData = this.afterTax - this.taxCredit
                }
            this.finalTaxData -= 10
            //부모에게 알린!
            // 부모가 등록한 이벤트인 get-discount 이벤트를 호출
            this.$emit('get-discount', this.finalTaxData)
        }
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')

        this.finalTaxData = this.finalTax
    },
    beforeDestroy() {
        console.log('beforeDestroy')
    },
    destroyed() {
        console.log('destroyed')
    }


}
</script>

<style>

</style>