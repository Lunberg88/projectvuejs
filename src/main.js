// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Auth from './store/auth'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');

router.beforeEach((to, from, next) => {
const isUser = store.state.auth;
const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	if(requiresAuth && !isUser) {
	   next('/login');
	} else {
	  next();
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store,
  components: { App }
})
