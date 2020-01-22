<template>
<b-navbar type="is-primary" spaced="true">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="../assets/img/logo.svg" alt="Sound it out" style="min-height:3rem;">
            </b-navbar-item>
        </template>

        <template slot="end">
             <b-navbar-dropdown>
               <template slot="label"><i class="fas fa-user-circle fa-2x text-white"></i></template>
                <b-navbar-item href="#" :to="{ name: 'account'}" id="account-option">
                    About
                </b-navbar-item>
                <b-navbar-item id="logout-option" href="#" @click.prevent="logout" >
                    Logout
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
    </b-navbar>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { User } from '@/models/user';
import userManager from '@/services/user-manager/user-manager';

const userNamespace = namespace('user');


@Component
export default class NavBar extends Vue {
    @userNamespace.Getter public user!: User | null;

    public async logout(): Promise<void> {
        await userManager.signoutRedirect();
    }
}
</script>