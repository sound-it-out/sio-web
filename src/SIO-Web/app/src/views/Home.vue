<template>
<AuthorizedLayout>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="show">show</button>
    <button @click="hide">hide</button>
  </div>
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
export default class Home extends Vue {
  public show() {
    this.$loader.show();
  }
  public hide() {
    this.$loader.hide();
  }
}
</script>
