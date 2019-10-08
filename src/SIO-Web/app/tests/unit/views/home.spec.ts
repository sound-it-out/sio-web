import Home from '@/views/home.vue';
import { BaseViewTests } from './base-view-tests';

class HomeViewTest extends BaseViewTests<Home> {
    constructor() {
        super(Home);
        jest.mock('@/api/document');
    }

    public Execute() {
        super.Execute();
    }
}

new HomeViewTest().Execute();
