import { Store } from 'Vuex';
import { LOAD_ME } from '@/stores/user/actions';
import { ME } from '@/stores/user/getters';
import { StoreTest } from './store-test';
jest.mock('@/api/document');
jest.mock('@/api/user');

class UserStoreTest extends StoreTest {
    constructor() {
        super();
    }

    public execute() {
        describe('User store', async () => {
            let store: Store<any>;

            beforeEach(() => {
                store = this.createInstance();
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
    }
}

new UserStoreTest().execute();


