import { Wrapper } from '@vue/test-utils';
import Vue from 'Vue';
import { RenderTest } from '../render-test';

export class ViewTests<T extends Vue> extends RenderTest<T> {
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
                expect(view!.vm.$route.name).toBe('documents');
            });

            it('Should have a user dropdown', () => {
                expect(view!.find('#user-dropdown') !== null).toBeTruthy();
            });

            it('Should have a user dropdown that contains logout link', () => {
                const logoutOption = view!.find('#user-dropdown #logout-option');
                expect(logoutOption !== null).toBeTruthy();
            });

            it('Should have a user dropdown that contains account link', () => {
                const accountOption = view!.find('#user-dropdown #account-option');
                expect(accountOption !== null).toBeTruthy();
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
                    // @ts-ignore
                    expect(document.querySelector('.loading-overlay').__vue__ !== null).toBeTruthy();
                });
            });

            it('should not be rendered after hide has been called', () => {
                view!.vm.$loader.show();
                view!.vm.$loader.hide();

                view!.vm.$nextTick(() => {
                    // @ts-ignore
                    expect(document.querySelector('.loading-overlay').__vue__ === null).toBeTruthy();
                });
            });
        });
    }
}
