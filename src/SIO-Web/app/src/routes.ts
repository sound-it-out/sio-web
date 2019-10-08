import { RouteConfig } from 'vue-router';
import Home from '@/views/homee.vue';
import Dcouments from '@/components/home/documents.vue';

const documents: RouteConfig = {
    path: '',
    name: 'documents',
    component: Dcouments,
    meta: {
        title: 'Dcouments',
        requiresAuthentication: true,
        ignoreBreadcrumb: true,
    },
};

const home: RouteConfig = {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
        title: 'Home',
        requiresAuthentication: true,
    },
    redirect: { name: 'documents' },
    children: [
        documents,
    ],
};

const routes: RouteConfig[] = [ home ];

export default routes;
