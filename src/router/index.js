import Vue from 'vue'
import Router from 'vue-router'
import MapDemo from '@/components/MapDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MapDemo',
      component: MapDemo
    }
  ]
})
