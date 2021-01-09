<template>
  <div id="app">
  <nav>
    <router-link to="/">
    <img src="./assets/LOGO.png">
    </router-link>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Sign Up</router-link>
      </div>
    </nav>
  <router-view></router-view>
  
  </div>
</template>

<script>



</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Righteous&display=swap');

#app {
  font-family: Open Sans;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 100%;
  background-color: #EEF2F7;

}

nav img {
  height: 48px;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 16px 5%;
  background-color: E7E8E9;
  box-shadow: #000 4px 0 4px;
}

.router-link-exact-active{
  color: white;
}
body {
margin:0;
top:0;
left:0;
font-family: Poppins;
}
button {
    border: none;
    background-color: #98B1CD;
    color: #080C11;
    padding: 8px 16px;
    border-radius: 30px;
    text-transform: uppercase;
    font-family: Open Sans;
    font-weight: 700;
    transition: 0.3s;
    font-size: 16px;
    margin: 20px 0;
}
button:hover {
    background-color: #547DAB;
    transform: scale(1.1);
}
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
