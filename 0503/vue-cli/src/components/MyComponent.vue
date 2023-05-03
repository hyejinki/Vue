<template>
  <div class="border">
    <h1>This is MyComponent</h1>
    <MyChild static-props="component(부모)에서 child로"
    :dynamic-props="dynamicProps"
     @child-to-parent="parentGetEvent"
     @child-input="getDynamicData"
    />
    

  </div>
</template>

<script>
import MyChild from '@/components/MyChild'
// import MyChild from './MyChild.vue'

export default {
  name: 'MyComponent',
  components: {
    MyChild,
  },
  data: function () {
    return {
      dynamicProps: "It is a data"
    }
  },
  methods: {
    parentGetEvent() {
      console.log('자식 컴포넌트에서 발생한 이벤트!')
    },
    getDynamicData(input) {
      console.log('child에서 입력한 ${input}을 출력!!')
    }
  }
}

</script>

<style>
  .border {
    border: solid;
  }
</style>
