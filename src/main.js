// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios';
import store from './store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import 'element-ui/lib/theme-chalk/index.css';
// 引入样式
import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 和 分页组件
import {VTable,VPagination} from 'vue-easytable'

// 注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
Vue.config.productionTip = false
Vue.prototype.$$http=commonAsynService
axios.defaults.baseURL="http://10.6.172.175:10010"
Vue.use(ElementUI);
Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  //components:{App},
  //template:'<App/>'
})
//调接口操作
function commonAsynService(url,method,params,data){
  return new Promise(function(resovle,reject){
    axios({
      url:url,
      method:method,
      params:params,
      data:data
    }).then(res=>{
      resovle(res.data);
    },error=>{
      reject(error);
    })
  })
}