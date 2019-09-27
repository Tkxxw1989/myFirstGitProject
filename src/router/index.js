import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../views/HelloWorld'
import homePage from '@/components/homePage'
import onlineMonitorHome from '../views/onlineMonitorHome'
import onlineMonitor from '@/components/onLineMonitor'
import login from '../views/login'
import collectControl from '../views/collectControl'
import componentMehtodTest from '../components/componentMethodTest'
import watchMethod from '../views/watchMethod'
import siderBar from '../views/siderBar'
import transFer from '../views/transFer'
import axiosTest from  '../views/axiosTest'
import mixin from '../views/mixinDemo'
Vue.use(Router)

export default new Router({
  mode:'history',//启用history模式，而不是vue-router默认的hash模式
  routes: [
    {
      path: '/',// /开头的表示根路径，非/开头表示跟随父路径嵌套
      name: 'login',
      component: login,
    },
    {
      path:'/foo',
      name:'helloWorld',
      component:HelloWorld
    },
    {
      path:'/homePage',
      name:'homePage',
      component:homePage
    },{
      path:'/onlineMonitor',
      name:'onlineMonitor',
      component:onlineMonitor,
      children:[
        {
          path:"",
          name:'onlineMonitorHome',
          component:onlineMonitorHome
        },
        {
          path:"collectControl",
          name:"conllectControl",
          component:collectControl
        },{
          path:"transfusion",
          name:"transfusion",
          component:componentMehtodTest
        },{
          path:"stress",
          name:"stress",
          component:watchMethod
        },{
          path:"iviewSiderBar",
          name:"iviewSiderBar",
          component:siderBar
        },{
          path:"iviewTransfer",
          name:"iviewTransfer",
          component:transFer
        },{
          path:"axiosTest",
          name:"axiosTest",
          component:axiosTest
        },{
          path:"mixinDemo",
          name:"mixinDemo",
          component:mixin
        }
      ]
    }

  ]
})
