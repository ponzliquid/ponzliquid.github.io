import Vue from 'vue'
import Router from 'vue-router'
// import Ponzliquid from '@/components/Ponzliquid'
// import Discography from '@/components/Discography'
// import Patronage from '@/components/Patronage'
import top from '@/components/PonzSingle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: top
    }
    // {
    //   path: '/',
    //   name: 'Ponzliquid',
    //   component: Ponzliquid
    // },
    // {
    //   path: '/discography',
    //   name: 'Discography',
    //   component: Discography
    // },
    // {
    //   path: '/patronage',
    //   name: 'Patronage',
    //   component: Patronage
    // }
  ]
})
