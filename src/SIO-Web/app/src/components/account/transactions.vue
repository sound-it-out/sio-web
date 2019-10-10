<template>
<div>
  <b-row>
    <b-col>
          <b-card class="shadow-sm" :class="{ 'mb-4' : index != transactions.length -1 }" v-for="(transaction, index) in transactions" :key="transaction.id">
            <b-row>
              <b-col>
                <h4>#{{ transaction.displayId }}</h4>
              </b-col>
              <b-col class="text-right">
                {{ transaction.date.toDateString() }}
              </b-col>
            </b-row>
          </b-card>
    </b-col>
  </b-row>
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
