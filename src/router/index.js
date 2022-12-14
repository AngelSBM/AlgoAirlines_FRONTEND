import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/modules/home/Home'
import store from '@/store'


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
    path: '/asientos',
    name: 'asientos',
    component: function () {
      return import(/* webpackChunkName: "seats" */ '@/modules/home/Seats')
    }    
  },
  {
    path: '/asientos-vuelta',
    name: 'asientosVuelta',
    component: function () {
      return import(/* webpackChunkName: "seatsback" */ '@/modules/home/SeatsBack')
    }    
  },
  {
    path: '/resumen',
    name: 'resumen',
    component: function () {
      return import(/* webpackChunkName: "resume" */ '@/modules/home/Resume')
    }    
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import(/* webpackChunkName: "login" */ '@/modules/oficial/Login')
    }    
  },
  {
    path: '/admin',
    name: 'admin',
    component: function () {
      return import(/* webpackChunkName: "admin" */ '@/modules/oficial/AdminDashboard')
    }    
  },
  {
    path: '/no-permiso',
    name: 'noPermiso',
    component: function () {
      return import(/* webpackChunkName: "noallowed" */ '@/modules/oficial/NoAllowed')
    }    
  },
]


const router = new VueRouter({
  routes,
  mode:'history'
})


router.beforeEach( async (to, from, next) => {


  if(to.name == 'admin'){

    const isAuth = store.getters['flight/isAdmin'];

    if(!isAuth){
      next({name: 'noPermiso'})
    }else{ next() }
  }

  next();

} )

export default router
