import Vue from 'vue'
import Router from 'vue-router'
import SignUp from './components/SignUp.vue'
import HomePage from './components/HomePage'
import Login from './components/Login.vue'


const routes = [
    { path: '/signup', name: 'signup', component: SignUp }, 
    {path: '/', component: HomePage}, 
    {path: '/login', component: Login}
  ]
  
  
  Vue.use(Router)
  
  export default new Router({
    routes,
    mode: 'history'
  })