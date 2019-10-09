<template>
<AuthorizedLayout>
  <b-row>
    <b-col md="3">
      <b-list-group>
        <b-list-group-item active-class="active" :to="{ name: 'profile'}">Profile</b-list-group-item>
        <b-list-group-item active-class="active" :to="{ name: 'transactions'}">Transactions</b-list-group-item>
      </b-list-group>
    </b-col>
    <b-col>
      <router-view />
    </b-col>
  </b-row>  
</AuthorizedLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AuthorizedLayout from '@/layouts/authorized.vue';

@Component({
  components: {
    AuthorizedLayout,
  },
})
export default class Account extends Vue {}
</script>
