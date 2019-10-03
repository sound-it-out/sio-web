import Vue from 'Vue';
import Vuex, { Store } from 'Vuex';
import RootStore from '@/store';
import { LOAD_ME } from '@/stores/user/actions';
import { ME } from '@/stores/user/getters';

Vue.use(Vuex);

jest.mock('@/api/user');

describe('User store', async () => {
    let store: Store<any>;

    beforeEach(() => {
        store = new Vuex.Store(new RootStore());
    });

    it('Should exist', () => {
        expect(store.state.user != null).toBeTruthy();
    });

    it(`Should not contain me before ${LOAD_ME}`, () => {
        expect(store.getters[ME]).toBeNull();
    });

    it(`Should contain me after ${LOAD_ME}`, async () => {
        await store.dispatch(LOAD_ME);
        expect(store.getters[ME] != null).toBeTruthy();
    });
});
