import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { DocumentStore } from '@/stores/document/store';
import { UserStore } from '@/stores/user/store';

export default class Store implements StoreOptions<any> {
  public modules = {
    document: new DocumentStore(),
    user: new UserStore(),
  };

  public state = {

  };

  public mutations =  {

  };
  public actions =  {

  };
}
