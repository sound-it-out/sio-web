<template>
<div>
</div>    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AuthorizedLayout from '@/layouts/authorized.vue';

@Component({
  components: {
    AuthorizedLayout,
  },
})
export default class Transactions extends Vue {

}
</script>
