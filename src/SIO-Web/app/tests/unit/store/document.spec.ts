import Vue from 'Vue';
import Vuex, { Store } from 'Vuex';
import RootStore from '@/store';

Vue.use(Vuex);

jest.mock('@/api/document');

describe('Document store', () => {
    let store: Store<any>;

beforeEach(() => {
    store = new Vuex.Store(new RootStore());
})

    it('Should not contain documents before loadDocumentsAsync', () => {
        //@ts-ignore
        expect(store.state.document.documents).toBeNull();   
    });

    it('Should contain documents after loadDocumentsAsync', (done) => {
        return store.dispatch('document/loadDocumentsAsync').then((value: any) => {
            setTimeout(() => {
                console.log('TIME IS UP');
                const documents = store.state.document.documents;
                expect(documents.length > 0).toBeTruthy();
              }, 1000);
              
            jest.runAllTimers();
        });      
    });
});