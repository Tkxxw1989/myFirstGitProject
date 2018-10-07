import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../views/HelloWorld'
import homePage from '@/components/homePage'
import secondRouter from '@/components/secondLevelRouter'
import onlineMonitor from '@/components/onLineMonitor'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage,
      children:[
        {
          path:"secondRouter",
          name:'secondRouter',
          component:secondRouter
        }
      ]
    },
    {
      path:'/foo',
      name:'helloWorld',
      component:HelloWorld
    },{
      path:'/onlineMonitor',
      name:'onlineMonitor',
      component:onlineMonitor
    }

  ]
})
