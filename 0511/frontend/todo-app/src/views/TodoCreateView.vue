<template>
  <div>
    <h2>Create</h2>
    <div>
      <label for="title">할 일 </label>
      <input id="title-input" type="text" v-model="form.title">
    </div>
    <div>
      <label for="description">설명 </label>
      <input id="description-input" type="text" v-model="form.description">
    </div>
    <button @click="goCreate()">생성하기</button>
  </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'TodoCreateView',
    data() {
      return {
        form : {
          title: '',
          description: '',

        }
      }
    }, 
    methods: {
      goCreate() {
        // 프론트에서 최소한의 유효성 검증
        if(this.form.title === '') {
          alert('할 일을 제대로 입력해주세요')
          return
        }
        if(this.form.description === ''){
          alert('설명을 제대로 입력해주세요!')
          return
        }
        
        const BACKEND_URL = 'http://localhost:8000/todos/'
        axios.post(BACKEND_URL, this.form)
        .then(() => {
          alert('정상적으로 생성됨!')
          this.form.title = ''
          this.form.description = ''
        }).catch((error) => {
          console.log(error)
        })
      }
    }

}
</script>

<style>

</style>