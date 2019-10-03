import Vue from 'Vue';
import Vuex, { Store } from 'Vuex';
import RootStore from '@/store';

Vue.use(Vuex);

jest.mock('@/api/document');

describe('Document store', async () => {
    let store: Store<any>;

    beforeEach(() => {
        store = new Vuex.Store(new RootStore());
    })

    it('Should exist', () => {
        //@ts-ignore
        expect(store.state.document != null).toBeTruthy();   
    });

    it('Should not contain documents before loadDocumentsAsync', () => {
        //@ts-ignore
        expect(store.state.document.documents).toBeNull();   
    });

    it('Should contain documents after loadDocumentsAsync', async () => {
        await store.dispatch('document/loadDocumentsAsync');
        expect(store.state.document.documents.length > 0).toBeTruthy();   
    });
});