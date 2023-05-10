<template>
  <div>
    <h2>메인 페이지</h2>
    <div v-if="isLoggedIn">
      <p>반갑소 {{ loginUser.id }}</p>
    </div>
    <div v-else>
      <p>로그인 하세요</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';


export default {
  name: 'HomeView',
  computed: {
    loginUser() {
      return this.$store.state.loginUser
    },
    ...mapGetters([
      'isLoggedIn'
    ]
    )
  }
  
}
</script>
