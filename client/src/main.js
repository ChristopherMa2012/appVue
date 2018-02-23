// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './app';
import router from './router/route';
import utilsObj from '@/utils/utilsFun';
import '@/utils/pxTorem';



window.Ma = utilsObj;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { App },
  replace: true
})