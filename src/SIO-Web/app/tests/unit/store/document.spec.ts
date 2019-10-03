import Vue from 'Vue';
import Vuex, { Store } from 'Vuex';
import RootStore from '@/store';
import { LOAD_DOCUMENTS } from '@/stores/document/actions';
import { DOCUMENTS } from '@/stores/document/getters';

Vue.use(Vuex);

jest.mock('@/api/document');

describe('Document store', async () => {
    let store: Store<any>;

    beforeEach(() => {
        store = new Vuex.Store(new RootStore());
    });

    it('Should exist', () => {
        expect(store.state.document != null).toBeTruthy();
    });

    it(`Should not contain documents before ${LOAD_DOCUMENTS}`, () => {
        expect(store.getters[DOCUMENTS]).toBeNull();
    });

    it(`Should contain documents after ${LOAD_DOCUMENTS}`, async () => {
        await store.dispatch(LOAD_DOCUMENTS);
        expect(store.getters[DOCUMENTS].length > 0).toBeTruthy();
    });
});
