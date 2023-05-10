<template>
  <div>
    <div>
        <label for="id">ID  </label>
        <input type="text" v-model="form.id">
    </div>
    <div>
        <label for="pw">PASSWORD  </label>
        <input type="text" v-model="form.pw">
    </div>
    <button @click="login">로그인</button>
  </div>
</template>

<script>
export default {
    name: 'LoginComponent',
    data() {
        return {
            form: {
                id: '',
                pw: '',
            }
        }
    }, 
    methods: {
        login() {
            if(this.form.id === '') {
                alert('ID를 입력하세요!')
                return
            }

            if(this.form.pw === '') {
                alert('PASSWORD를 입력하세요!')
                return
            }

            this.$store.dispatch('login', this.form).then(() => {
                this.$router.push('/')
            }).catch((error) => {
                alert(error)
            })
        },
    }

}
</script>

<style>

</style>