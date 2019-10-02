import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { DocumentStore } from '@/stores/document/store';

export default class Store implements StoreOptions<any> {
  modules = {
    document: new DocumentStore(),
  };

  state = {

  };

  mutations =  {

  };
  actions =  {

  };
};
