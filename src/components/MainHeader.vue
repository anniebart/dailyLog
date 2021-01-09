<template>
    <div class="MainHeader">
         <header>
         <a href="/"><img class="logo" src="../assets/LOGO.png"></a>
         <div class="flex">
           <router-link to="/signup"><button>Sign up</button></router-link>
    <router-link to="/about">About</router-link>
        </div>
     </header>
     
    </div>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    msg: String
  }
}
</script>
<style scoped>
header {
    display: flex;
    position: fixed;
    width: 100vw;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    top:0;
    left: 0;
    background-color: #EEF2F7;
    box-shadow: 0 2px  4px #203042;

}
header .flex {
    margin: 0 32px;
}

button {
    margin-left: 12px;
}

.logo {
    height: 40px;
}
</style>