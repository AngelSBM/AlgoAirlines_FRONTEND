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
      return import(/* webpackChunkName: "flights" */ '@/modules/home/Flights')
    }
  },
  {
    path: '/pasajeros',
    name: 'pasajeros',
    component: function () {
      return import(/* webpackChunkName: "passengers" */ '@/modules/home/Passengers')
    }    
  },
  {
    path: '/resumen',
    name: 'resumen',
    component: function () {
      return import(/* webpackChunkName: "passengers" */ '@/modules/home/Resume')
    }    
  },
]

const router = new VueRouter({
  routes
})

export default router
