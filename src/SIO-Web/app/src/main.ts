import Vue from 'vue';
import Vuex from 'vuex'
import App from './App.vue';
import router from './router';
import Store from './store';
import './registerServiceWorker';

Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store(new Store());

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
