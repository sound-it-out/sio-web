import Vue, { PluginObject, VueConstructor } from 'vue';
import Vuex from 'vuex';
import Buefy from 'buefy';
import loader from '@/plugins/loader';

const plugin: PluginObject<any> = {
    install: (vue: VueConstructor<any>, options?: any): void => {
        Vue.use(Vuex);
        Vue.use(Buefy);
        Vue.use(loader);
    },
};

export default plugin;
