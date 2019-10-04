import Vue from 'vue';
import Loader from '@/components/loader/loader.vue';

export const loaderProgramatic = {
    loader: null,
    show() {
        if (this.loader === null)
        {
            const vm = typeof window !== 'undefined' && (window as any).Vue ? (window as any).Vue : Vue;
            const loaderComponent = vm.extend(Loader);

            const props = { show: true }

            this.loader = new loaderComponent({
                props,
                el: document.createElement('div'), 
            });
        }

        //@ts-ignore
        this.loader!.show();
    },
    hide() {
        if (this.loader !== null) {
            //@ts-ignore
            this.loader!.hide();
        }
    }
}

const plugin = {
    install(vue: any) {
        Vue.prototype.$loader = loaderProgramatic;
    },
};

declare module 'vue/types/vue' {
    interface Vue {
        $loader: typeof loaderProgramatic;
    }
}

export default plugin;