import { Api } from '@/api/api';
import { Result } from '@/api/result';
import { User } from '@/models/user';
import { Transaction } from '@/models/transaction';

export class UserApi extends Api {
    public constructor() {
        super();
    }

    public getMeAsync(): Promise<Result<User>> {
        const user = {
            id: 'test',
            email: 'test@sound-it-out.com',
            firstName: 'test',
            lastName: 'user',
            deleted: false,
            verified: true,
            characterTokens: 0,
        } as User;

        return Promise.resolve(Result.ok(user));
    }

    public getTransactionsAsync(): Promise<Result<Transaction[]>> {
        const transactions = [
            {
                id: '1',
                displayId: 1,
                characterTokens: 1000,
                price: 1,
                date: new Date(),
            },
            {
                id: '2',
                displayId: 2,
                characterTokens: 1465,
                price: 1.46,
                date: new Date(),
            },
            {
                id: '3',
                displayId: 3,
                characterTokens: 1000,
                price: 3,
                date: new Date(),
            },
         ] as Transaction[];

        return Promise.resolve(Result.ok(transactions));
    }
}
