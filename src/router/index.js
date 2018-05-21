import Vue from 'vue'
import Router from 'vue-router'
import DashboardLogin from '@/components/DashboardLogin'
import DashboardAdmin from '@/components/DashboardAdmin'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: DashboardLogin
    },
    {
      path: '/login',
      name: 'Dashboard',
      component: DashboardLogin
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/admin',
      name: 'DashboardAdmin',
      component: DashboardAdmin
    }
  ]
})
