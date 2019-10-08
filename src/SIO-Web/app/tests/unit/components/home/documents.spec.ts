import Documents from '@/components/home/documents.vue';
import { BaseViewTests } from '../base-component-test';
import { Wrapper } from '@vue/test-utils';
import flushPromises from 'flush-promises';

jest.mock('@/api/document');

class DocumentsComponentTest extends BaseViewTests<Documents> {
    constructor() {
        super(Documents, true);        
    }

    public Execute() {
        describe('documents component', () => {
            let component: Wrapper<Documents> | null = null;

            beforeEach(async () => {
                component = this.createInstance();
                await flushPromises();
            });

            it('Should load documents', () => {
                // @ts-ignore
                const documents = component!.vm.documents;
                expect(documents.length).toBeGreaterThan(0);
            });

            it('Should render all documents', () => {
                // @ts-ignore
                const documents = component!.vm.documents;
                const documentElements = component!.findAll('.document');
                expect(documentElements).toHaveLength(documents.length);
            });
        });
    }
}

new DocumentsComponentTest().Execute();
