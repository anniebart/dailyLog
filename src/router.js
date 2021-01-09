import Vue from 'vue'
import Router from 'vue-router'
import SignUp from './components/SignUp.vue'
import HomePage from './components/HomePage'


const routes = [
    { path: '/signup', component: SignUp }, 
    {path: '/', component: HomePage}
  ]
  
  
  Vue.use(Router)
  
  export default new Router({
    routes
  })