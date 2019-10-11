import Transactions from '@/components/account/transactions.vue';
import { ComponentTest } from '../component-test';
import { Wrapper } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import { Transaction } from '@/models/transaction';

class DocumentsComponentTest extends ComponentTest<Transactions> {
    constructor() {
        super(Transactions);
    }

    public Execute() {
        describe('profile component', () => {
            let component: Wrapper<Transactions> | null = null;

            beforeEach(async () => {
                component = this.createInstance();
                await flushPromises();
            });

            it('Should load transactions', () => {
                // @ts-ignore
                const transactions: Transaction[] = component!.vm.transactions;
                expect(transactions != null).toBeTruthy();
            });

            it('Should render all transactions', () => {
                // @ts-ignore
                const transactions: Transaction[] = component!.vm.transactions;
                const transactionElements = component!.findAll('.transaction');
                expect(transactions != null).toBeTruthy();
                expect(transactionElements).toHaveLength(transactions.length);
            });
        });
    }
}

new DocumentsComponentTest().Execute();
