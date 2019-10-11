import Account from '@/views/account.vue';
import { ViewTests } from './view-test';
import { Wrapper } from '@vue/test-utils';

jest.mock('@/api/document');
jest.mock('@/api/user');

class AccountViewTest extends ViewTests<Account> {
    constructor() {
        super(Account);
    }

    public Execute() {
        super.Execute();

        describe('account page', () => {
            let view: Wrapper<Account> | null = null;

            beforeEach(() => {
                view = this.createInstance(true);
            });

            it('Should render sidebar', () => {
                const sidebar = view!.find('#account-sidebar');
                expect(sidebar != null).toBeTruthy();
            });
        });
    }
}

new AccountViewTest().Execute();
