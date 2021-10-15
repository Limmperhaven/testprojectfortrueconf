import GreenPage from '../pages/GreenPage'
import YellowPage from '../pages/YellowPage'
import RedPage from '../pages/RedPage'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/green'
  },
  {
    path: '/green',
    name: 'green',
    component: GreenPage
  },
  {
    path: '/yellow',
    name: 'yellow',
    component: YellowPage,
    props: true
  },
  {
    path: '/red',
    name: 'red',
    component: RedPage
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
