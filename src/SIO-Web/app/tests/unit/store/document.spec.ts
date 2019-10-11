import { Store } from 'Vuex';
import { LOAD_DOCUMENTS, LOAD_TRANSLATION_OPTIONS } from '@/stores/document/actions';
import { DOCUMENTS, TRANSLATION_OPTIONS } from '@/stores/document/getters';
import { StoreTest } from './store-test';
jest.mock('@/api/document');
jest.mock('@/api/user');

class DocumentStoreTest extends StoreTest {
    constructor() {
        super();
    }

    public execute() {
        describe('Document store', async () => {
            let store: Store<any>;

            beforeEach(() => {
                store = this.createInstance();
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

            it(`Should not contain translation options before ${LOAD_TRANSLATION_OPTIONS}`, () => {
                expect(store.getters[TRANSLATION_OPTIONS]).toBeNull();
            });

            it(`Should contain translation options after ${LOAD_TRANSLATION_OPTIONS}`, async () => {
                await store.dispatch(LOAD_TRANSLATION_OPTIONS);
                expect(store.getters[TRANSLATION_OPTIONS].length > 0).toBeTruthy();
            });
        });
    }
}

new DocumentStoreTest().execute();
