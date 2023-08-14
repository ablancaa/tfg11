import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bitacora from '../views/Bitacora.vue'
import UsersView from '../views/UsersView.vue'
import TicketsView from '../views/TicketsView.vue'
import TablerosView from '../views/TablerosView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bitacora',
    name: 'bitacora',
    component: Bitacora
  },
  {
    path: '/ticketsView',
    name: 'ticketsView',
    component: TicketsView
  },
  {
    path: '/usersView',
    name: 'usersView',
    component: UsersView
  },
  {
    path: '/tablerosView',
    name: 'tablerosView',
    component: TablerosView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
