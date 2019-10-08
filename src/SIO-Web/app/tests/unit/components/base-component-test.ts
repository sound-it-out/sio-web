import { createLocalVue, VueClass, mount, shallowMount } from '@vue/test-utils';
import router from '@/router';
import VueRouter from 'vue-router';
import Vue from 'Vue';
import plugins from '@/plugins';
import Vuex from 'vuex';
import Store from '@/store';

export class BaseViewTests<T extends Vue> {
    protected view: VueClass<T>;
    private isShallow: boolean;

    constructor(view: VueClass<T>, isShallow: boolean) {
        this.view = view;
        this.isShallow = isShallow;
    }

    protected createInstance() {
        const localVue = createLocalVue();
        
        localVue.use(VueRouter);
        localVue.use(plugins);

        const store = new Vuex.Store(new Store());
        const mountConfig = {
            localVue,
            router,
            store
        };

        return this.isShallow ? shallowMount(this.view, mountConfig) : mount(this.view, mountConfig);
    }

    protected Execute() {}
}
