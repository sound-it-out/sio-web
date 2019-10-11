import Profile from '@/components/account/profile.vue';
import { ComponentTest } from '../component-test';
import { Wrapper } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import { User } from '@/models/user';
import { LOAD_ME } from '@/stores/user/actions';
jest.mock('@/api/document');
jest.mock('@/api/user');

class DocumentsComponentTest extends ComponentTest<Profile> {
    constructor() {
        super(Profile);
    }

    public Execute() {
        describe('profile component', () => {
            let component: Wrapper<Profile> | null = null;

            beforeEach(async () => {
                component = this.createInstance();
                component.vm.$store.dispatch(LOAD_ME);
                await flushPromises();
            });

            it('Should load me', () => {
                // @ts-ignore
                const me: User = component!.vm.me;
                expect(me != null).toBeTruthy();
            });

            it('Should render profile info', () => {
                const info = component!.find('#profile-info');
                expect(info != null).toBeTruthy();
            });

            it('Should render profile picture', () => {
                const picture = component!.find('#profile-picture');
                expect(picture != null).toBeTruthy();
            });
        });
    }
}

new DocumentsComponentTest().Execute();
