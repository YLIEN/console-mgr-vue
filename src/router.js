import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/User/Login'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashabord',
      name: 'home',
      component: () => import('./components/Home.vue'),
      meta: {
        title: '',
        requireAuth: true
      },
      children: [
        {
          path: '/dashabord',
          name: '',
          component: () => import('./views/About.vue'),
          meta: {
            title: ''
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
