import { shallowMount, createLocalVue, Wrapper, VueClass, mount } from '@vue/test-utils';
import router from '@/router';
import VueRouter from 'vue-router';
import Vue from 'Vue';
import plugins from '@/plugins';

export class BaseViewTests<T extends Vue> {
    protected view: VueClass<T>;
    protected name: string;

    constructor(view: VueClass<T>) {
        this.view = view;
        this.name = view.name.toLowerCase();
    }

    protected createInstance() {
        const localVue = createLocalVue();
        localVue.use(VueRouter);
        localVue.use(plugins);

        return mount(this.view, {
            localVue,
            router,
        });
    }

    protected Execute() {
        describe(`nav bar`, () => {
            let view: Wrapper<T> | null = null;

            beforeEach(() => {
                view = this.createInstance();
            });

            it('should exist', () => {
                expect(view!.find('#top-nav') !== null).toBeTruthy();
            });

            it('should have logo', () => {
                expect(view!.find('#logo img') !== null).toBeTruthy();
            });

            test('logo should navigate to home', () => {
                const logo = view!.find('#logo');
                logo.trigger('click');
                expect(view!.vm.$route.name).toBe(this.name);
            });
        });

        describe(`loader`, () => {
            let view: Wrapper<T> | null = null;

            beforeEach(() => {
                view = this.createInstance();
            });

            it('should exist', () => {
                expect(view!.vm.$loader !== null).toBeTruthy();
            });

            it('should be rendered after show has been called', () => {
                view!.vm.$loader.show();
                view!.vm.$nextTick(() => {
                    //@ts-ignore
                    expect(document.querySelector('.loading-overlay').__vue__ !== null).toBeTruthy();
                })
            });

            it('should not be rendered after hide has been called', () => {
                view!.vm.$loader.show();
                view!.vm.$loader.hide();

                view!.vm.$nextTick(() => {
                    //@ts-ignore
                    expect(document.querySelector('.loading-overlay').__vue__ === null).toBeTruthy();
                })
            });
        });
    }
}
