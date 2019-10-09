<template>
<div>
  <b-row>
    <b-col>
         <b-list-group>
          <b-list-group-item :class="{ 'mb-4' : index != transactions.length -1 }" v-for="(transaction, index) in transactions" :key="transaction.id">
            <b-row>
              <b-col>
                <h4 class="text-primary">#{{ transaction.displayId }}</h4>
              </b-col>
              <b-col class="text-right">
                {{ transaction.date }}
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <span><strong>Price:</strong> £{{ transaction.price }}</span>
                <span class="ml-2"><strong>Tokens:</strong>{{ transaction.characterTokens }} </span>
                
              </b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>
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
