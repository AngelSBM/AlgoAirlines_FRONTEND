import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/modules/home/Home'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import(/* webpackChunkName: "home" */ '@/modules/home/Home')
    }
  },
  {
    path: '/vuelos',
    name: 'vuelos',
    component: function () {
      return import(/* webpackChunkName: "home" */ '@/modules/home/Flights')
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
