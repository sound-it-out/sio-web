<template>
  <b-navbar id="top-nav" type="light" variant="light">
    <b-navbar-nav class="w-100">
      <router-link id="logo" class="navbar-brand col-sm-3 col-md-2 mr-0 text-left" :to="{ name: 'home' }">
        <img src="../assets/img/logo.svg" alt=""/>
      </router-link>

      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
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