import Vue from 'vue'
import Router from 'vue-router'
import Static from '@/components/Static'
import HelloWorld from '@/components/HelloWorld'
import News from '@/components/News'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/static',
      name: 'static',
      component: Static
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ]
})
