import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn/SignIn.vue'
import Home from '@/components/Home'
import Activity from '@/components/Activity/Activity'
import auth from '@/auth'
import Profile from '@/components/Profile/Profile'
import Leaderboard from '@/components/Leaderboard'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: SignIn,
      beforeEnter: function(to, from, next) {
        // if (auth.token) {
        //   next({
        //     name: 'activity',
        //     params: {
        //       userName: auth.user.firstName
        //     }
        //   })
        // }
        next()
      }
    },
    {
      path: '/:userName/dashboard',
      component: Home,
      children: [
        {
          path: 'activity',
          name: 'activity',
          component: Activity,
          meta: { requiresAuth: true }
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile,
          meta: { requiresAuth: true }
        },
        {
          path: 'leaderboard',
          name: 'leaderboard',
          component: Leaderboard,
          meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log(auth, auth.user.firstName)
    if (!auth.currentStatus()) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    console.log('no')
    next() // make sure to always call next()!
  }
})

export default router;
