<template>
<AuthorizedLayout>
  <router-view />
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
export default class Home extends Vue {}
</script>
