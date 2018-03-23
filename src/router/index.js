import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn/SignIn.vue'
import Home from '@/components/Home'
import Activity from '@/components/Activity/Activity'
import Profile from '@/components/Profile/Profile'
import Leaderboard from '@/components/Leaderboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: SignIn,
    },
    {
      path: '/:userName/dashboard',
      component: Home,
      children: [
        {
          path: 'activity',
          name: 'activity',
          component: Activity
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        },
        {
          path: 'leaderboard',
          name: 'leaderboard',
          component: Leaderboard
        },
        {
          // set up default path
          path:'',
          redirect: '/:userName/dashboard/activity'
        }
      ]
    }
  ]
})
