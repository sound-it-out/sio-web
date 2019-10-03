import { Api } from '@/api/api';
import { Result } from '@/api/result';
import { User } from '@/models/user';

export class UserApi extends Api {
    public constructor() {
        super();
    }

    public getMeAsync(): Promise<Result<User>> {
        return this.getAsync<User>('v1/me');
    }
}
