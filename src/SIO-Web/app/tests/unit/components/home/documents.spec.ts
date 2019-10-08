import Documents from '@/components/home/documents.vue';
import { BaseViewTests } from '../base-component-test';
import { Wrapper } from '@vue/test-utils';

class DocumentsComponentTest extends BaseViewTests<Documents> {
    constructor() {
        super(Documents, true);
        jest.mock('@/api/document');
    }

    public Execute() {
        super.Execute();

        describe('documents component', () => {
            let component: Wrapper<Documents> | null = null;

            beforeEach(() => {
                component = this.createInstance();
            });

            it('Should load documents', () => {

            });
        })
    }
}

new DocumentsComponentTest().Execute();
