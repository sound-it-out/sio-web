import Vue, { PluginObject, VueConstructor } from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import loader from '@/plugins/loader';

const plugin: PluginObject<any> = {
    install: (vue: VueConstructor<any>, options?: any): void => {
        Vue.use(Vuex);
        Vue.use(BootstrapVue);
        Vue.use(loader);
    },
};

Vue.use(plugin);

export default plugin;
