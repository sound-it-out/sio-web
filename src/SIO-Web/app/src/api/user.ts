import { Api } from '@/api/api';
import { Result } from '@/api/result';
import { User } from '@/models/user';
import { Transaction } from '@/models/transaction';

export class UserApi extends Api {
    public constructor() {
        super();
    }

    public getMeAsync(): Promise<Result<User>> {
        return this.getAsync<User>('v1/me');
    }

    public getTransactionsAsync(): Promise<Result<Transaction[]>> {
        return this.getAsync<Transaction[]>('v1/transactions');
    }
}
