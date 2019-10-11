<template>
  <b-navbar id="top-nav" toggleable="md" type="primary" variant="primary" class="shadow-sm">
    <b-navbar-brand id="logo" href="#" :to="{ name: 'home'}">
      <img src="../assets/img/logo.svg" alt=""/> <span class="ml-2 text-white">Sound It Out</span>
    </b-navbar-brand>
    <b-navbar-toggle target="top-nav" />
    <b-collapse is-nav id="top-nav">
        <b-navbar-nav class="mr-auto">             
        </b-navbar-nav>
        <b-navbar-nav class="my-2 my-md-0">
            <b-nav-item-dropdown id="user-dropdown" right class="d-none d-md-block" no-caret>
                <template slot="button-content"><i class="fas fa-user-circle fa-2x text-white"></i></template>
                <b-dropdown-item :to="{ name: 'account'}" id="account-option" href="#">Account</b-dropdown-item>
                <b-dropdown-item id="logout-option" href="#">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { User } from '@/models/user';

const userNamespace = namespace('user');

export default class NavBar extends Vue {
    @userNamespace.Getter public user!: User | null;
}
</script>