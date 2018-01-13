import Vue from 'vue'
import Router from 'vue-router'
import Static from '@/components/Static.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import News from '@/components/News.vue'
import User from '@/components/User.vue'
import UserDefault from '@/components/user/UserDefault.vue'
import UserProfile from '@/components/user/UserProfile.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/static',
      component: Static
    },
    {
      path: '/news',
      component: News
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
      ]
    }
  ]
})
