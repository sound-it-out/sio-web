import { GetterTree } from 'vuex';
import { State } from '@/stores/user/state';
import { User } from '@/models/user';

export const ME: string = 'user/me';

export class Getters implements GetterTree<State, any> {
    [key: string]: (state: State, getters: any, rootState: any, rootGetters: any) => any;

    public me = (state: State): User | null => {
        return state.me;
    }
}
