<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/posts">Posts</router-link> |
    <span v-if="isLoggedIn">
      <a @click="logout">Logout</a>
    </span>
    <span v-else>
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
    </span>
  </nav>
</template>
<script>
export default {
  name: 'NavBar',
  computed : {
      isLoggedIn : function(){ return this.$store.getters.isAuthenticated}
    },
    methods: {
      async logout (){
        await this.$store.dispatch('LogOut')
        this.$router.push('/login')
      }
    },
}
</script>
<style scoped>
nav {
    background-color: #EEF2F7;
    
}
</style>