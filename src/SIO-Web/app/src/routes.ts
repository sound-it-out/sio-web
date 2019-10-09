import { RouteConfig } from 'vue-router';
import Home from '@/views/home.vue';
import Account from '@/views/account.vue';
import Dcouments from '@/components/home/documents.vue';
import Profile from '@/components/account/profile.vue';
import Transactions from '@/components/account/transactions.vue';


const documents: RouteConfig = {
    path: '',
    name: 'documents',
    component: Dcouments,
    meta: {
        title: 'Documents',
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

const profile: RouteConfig = {
    path: 'profile',
    name: 'profile',
    component: Profile,
    meta: {
        title: 'Profile',
        requiresAuthentication: true,
        ignoreBreadcrumb: true,
    },
};

const transactions: RouteConfig = {
    path: 'transactions',
    name: 'transactions',
    component: Transactions,
    meta: {
        title: 'Transactions',
        requiresAuthentication: true,
        ignoreBreadcrumb: true,
    },
};

const account: RouteConfig = {
    path: '/account',
    name: 'account',
    component: Account,
    meta: {
        title: 'Account',
        requiresAuthentication: true,
    },
    redirect: { name: 'profile' },
    children: [
        profile,
        transactions,
    ],
};

const routes: RouteConfig[] = [ home, account ];

export default routes;
