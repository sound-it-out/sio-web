import { createLocalVue, VueClass, mount, shallowMount } from '@vue/test-utils';
import router from '@/router';
import VueRouter from 'vue-router';
import Vue from 'Vue';
import plugins from '@/plugins';
import Vuex from 'vuex';
import Store from '@/store';
import { Test } from './test';

export class RenderTest<T extends Vue> extends Test {
    protected view: VueClass<T>;

    constructor(view: VueClass<T>) {
        super();
        this.view = view;
    }

    protected createInstance(isShallow?: boolean) {
        if (isShallow === undefined) {
            isShallow = false;
        }

        const localVue = createLocalVue();

        localVue.use(VueRouter);
        localVue.use(plugins);

        const store = new Vuex.Store(new Store());
        const mountConfig = {
            localVue,
            router,
            store,
        };

        return isShallow ? shallowMount(this.view, mountConfig) : mount(this.view, mountConfig);
    }
}
