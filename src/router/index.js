import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
// import Login from '../views/Login.vue'
// import Vue from 'vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/vehicle',
    name:'Vehicle',
    component: ()=> import('../views/Vehicle.vue')
  }
  ,
  {
    path:'/insurance',
    name:'Insurance',
    component: ()=> import('../views/Insurance.vue')
  },
  {
    path:'/listInsurance',
    name:'InsuranceList',
    component: ()=> import('../views/InsuranceList.vue')
  },
  {
    path:'/authentication',
    name:'Login',
    component:()=>import('../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/userList',
    name:'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// const token=localStorage.getItem("market-token")

// router.beforeEach((to, from, next) => {
//   if (to.path !== '/authentication' && !token) {
//     console.log(token)
//     next('/authentication')
//   }
//   else if (token) {
//     const jwt = require('jsonwebtoken')
//     let decoded = jwt.decode(token)
//     let dataAtual = parseInt(Date.now() / 1000)
//     if (dataAtual > decoded.exp) {
//       // localStorage.removeItem(token);
//       console.log(decoded.exp)
//       // Login.logining();
//     }
//     next()

//   }
//   else {
//     next()
//   }
// }
// )

export default router

// Vue.use(VueRouter)

// export default function (/* { store, ssrContext } */) {
//   const Router = new VueRouter({
//     scrollBehavior: () => ({ y: 0 }),
//     routes,
//     mode: process.env.VUE_ROUTER_MODE,
//     base: process.env.VUE_ROUTER_BASE
//   })

//   const token = localStorage.getItem('market-token')

//   Router.beforeEach((to, from, next) => {
//     if (to.path !== '/authentication' && !token) {
//       next('/authentication')
//     }
//     else if (token) {
//       const jwt = require('jsonwebtoken')
//       let decoded = jwt.decode(token)
//       let dataAtual = parseInt(Date.now() / 1000)
//       if (dataAtual > decoded.exp) {
//         Login.loginning()
//       }
//       next()
//     }
//     else {
//       next()
//     }
//   })

//   return Router
// }
