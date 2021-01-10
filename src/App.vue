<template>
  <div id="app">
  <nav-bar> </nav-bar>
  <router-view></router-view>
  
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar
  }
 
}
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

body {
  background-color: #EEF2F7;
}

a{
  text-decoration: none;
  color: #2c3e50;
  margin: 0 8px;
  font-weight: 800;
}


a:hover {
  color: #436489;
}

nav img {
  height: 48px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 5%;
  background-color: #EEF2F7;
  box-shadow: #000 4px 0 4px;
}

.router-link-exact-active {
  color: #436489;
 border-bottom: 2px solid #2c3e50;
}
img.router-link-exact-active {
  border-bottom-color:#E7E8E9 ;
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
