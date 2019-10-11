import Home from '@/views/home.vue';
import { ViewTests } from './view-test';

jest.mock('@/api/document');
jest.mock('@/api/user');

class HomeViewTest extends ViewTests<Home> {
    constructor() {
        super(Home);
    }

    public Execute() {
        super.Execute();
    }
}

new HomeViewTest().Execute();
