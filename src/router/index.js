import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Activity from '@/components/Activity'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
          // set up default path
          path:'',
          redirect: '/activity'
        }
      ]
    }
  ]
})
