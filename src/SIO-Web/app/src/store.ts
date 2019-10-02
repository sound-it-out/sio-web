import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex';
import { DocumentStore } from '@/stores/document/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    document: new DocumentStore(),
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
});
