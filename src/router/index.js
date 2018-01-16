import Vue from 'vue'
import Router from 'vue-router'
import Static from '@/components/Static'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/News'
import User from '@/components/User'
import UserDefault from '@/components/user/UserDefault'
import UserProfile from '@/components/user/UserProfile'
import Login from '@/components/Login'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/static',
      component: Static,
      /*meta: {
        requiresAuth: true
      }*/
    },
    {
      path: '/news',
      component: News,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/user/:username',
      component: User,
      children: [
          {
            path: '',
            component: UserDefault
          },
          {
            path: 'profile',
            component: UserProfile
          }
      ],
      /*meta: {
        requiresAuth: true
      } */
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
