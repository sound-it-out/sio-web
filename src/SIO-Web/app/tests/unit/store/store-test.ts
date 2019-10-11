import Vue from 'Vue';
import Vuex from 'Vuex';
import RootStore from '@/store';
import { Test } from '../test';

export class StoreTest extends Test {
    constructor() {
        super();
        Vue.use(Vuex);
    }

    protected createInstance() {
        return new Vuex.Store(new RootStore());
    }
}
