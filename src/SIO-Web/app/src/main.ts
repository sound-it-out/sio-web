import Vue from 'vue';
import Vuex from 'vuex';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import App from './App.vue';
import router from './router';
import Store from './store';
import plugins from '@/plugins';
import { LOAD_ME } from '@/stores/user/actions';
import '@fortawesome/fontawesome-free/css/all.css';
import '@/assets/scss/app.scss';

Vue.use(plugins);

Vue.config.productionTip = false;

const store = new Vuex.Store(new Store());

Sentry.init({
  environment: process.env.VUE_APP_SENTRY_ENVIRONMENT,
  dsn: 'https://d062d842a1274a65b7bd9479ce74b1b6@sentry.io/1758158',
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
});


async function start(): Promise<void> {

  // Load user information before page load
  // await store.dispatch(LOAD_ME);

  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
}

start();
