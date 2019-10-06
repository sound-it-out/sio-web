import Home from '@/views/Home.vue';
import { BaseViewTests } from './base-view-tests';

class HomeViewTest extends BaseViewTests<Home> {
    constructor() {
        super(Home);
    }
    public Execute() {
        super.Execute();
    }
}

new HomeViewTest().Execute();
