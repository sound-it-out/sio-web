import Vue from 'Vue';
import Vuex from 'Vuex';
import RootStore from '@/store';

export class StoreTest {
    constructor() {
        Vue.use(Vuex);
    }

    protected createInstance() {
        return new Vuex.Store(new RootStore());
    }
}
