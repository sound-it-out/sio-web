import { Api } from '@/api/api';
import { Result } from '@/api/result';
import { User } from '@/models/user';

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
}
