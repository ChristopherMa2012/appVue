// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './app'
import router from './router/route'
import store from './store/store'
import utilsObj from '@/utils/utilsFun'
import '@/utils/pxTorem'



window.Ma = utilsObj;
Vue.config.productionTip = false
Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<app/>',
  components: { App },
  created:function(){
    
  },
  replace: true
})