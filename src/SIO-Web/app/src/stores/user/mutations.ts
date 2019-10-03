import { MutationTree } from 'vuex';
import { State } from '@/stores/user/state';
import { User } from '@/models/user';

export class Mutations implements MutationTree<State> {
    [key: string]: (state: State, payload: any) => any;

    public setUser = (state: State, user: User | null) => {
        state.me = user;
    }
}
