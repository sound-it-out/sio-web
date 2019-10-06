import Vue from 'vue';
import Vuex from 'vuex';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import Store from './store';
import './registerServiceWorker';
import '@/assets/scss/app.scss';
import { LOAD_ME } from '@/stores/user/actions';
import loader from '@/plugins/loader';

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(loader);

Vue.config.productionTip = false;

const store = new Vuex.Store(new Store());

Sentry.init({
  environment: process.env.SENTRY_ENVIRONMENT,
  dsn: 'https://d062d842a1274a65b7bd9479ce74b1b6@sentry.io/1758158',
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
});


async function start(): Promise<void> {

  // Load user information before page load
  await store.dispatch(LOAD_ME);

  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
}

start();
