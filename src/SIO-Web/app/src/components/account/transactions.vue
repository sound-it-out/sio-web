<template>
<div>
</div>    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AuthorizedLayout from '@/layouts/authorized.vue';
import { Transaction } from '@/models/transaction';
import { UserApi } from '@/api/user';

const userApi = new UserApi();

@Component({
  components: {
    AuthorizedLayout,
  },
})
export default class Transactions extends Vue {
  private transactions: Transaction[] | null = null;

  private async mounted(): Promise<void> {
    this.$loader.show();
    const result = await userApi.getTransactionsAsync();

    if (result.isError) {
      // throw some error
    }

    this.transactions = result.value;
    this.$loader.hide();
  }
}
</script>
