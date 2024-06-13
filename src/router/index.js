import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NovaPocetna from '../views/NovaPocetna.vue'
import PlayerView from '../views//PlayerView.vue'
import AddPlayer from '@/components/AddPlayer.vue'
import PlayerDialog from '../components/PlayerDialog.vue'
import TablicaLige from '../views/TablicaLige.vue'
import AddMatch from '@/components/AddMatch.vue'
import MatchView from '../views/MatchView.vue'
import UpdatePlayer from '../components/UpdatePlayer.vue'

const routes = [
  {
    path: '/oldhome',
    name: 'home',
    component: HomeView
  },
  {
    path:'/',
    name:'pocetna',
    component:NovaPocetna
  },
  {
    path:'/players',
    name:'players',
    component:PlayerView
  },
  {
    path:'/addplayer',
    name:'addplayer',
    component:AddPlayer
  },
  {
    path:'/playerdialog',
    name:'playerdialog',
    component:PlayerDialog
  },
  {
    path:'/table',
    name:'table',
    component:TablicaLige
  },
  {
    path:'/addmatch',
    name:'addmatch',
    component:AddMatch
  },
  {
    path:'/matches',
    name:'matches',
    component:MatchView
  },
  {
    path:'/updateplayer',
    name:'updateplayer',
    component:UpdatePlayer
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
