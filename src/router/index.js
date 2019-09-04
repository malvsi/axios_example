import Vue from 'vue'
import Router from 'vue-router'
// import Axios from '@/components/axios'
// import AxiosAll from '@/components/axios_all'

Vue.use(Router)

let AxiosAll = r => require.ensure([], () => r(require('@/components/axios_all')))

let Axios = () => import('@/components/axios')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Axios',
      component: Axios
    },
    {
      path: '/all',
      name: 'AxiosAll',
      component: AxiosAll
    }
  ]
})
