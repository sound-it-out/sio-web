import { ActionTree, ActionContext } from 'vuex';
import { State } from '@/stores/user/state';
import { UserApi } from '@/api/user';

const userApi = new UserApi();

export const LOAD_ME: string = 'user/loadMeAsync';

export class Actions implements ActionTree<State, any> {
    [key: string]: ((injectee: ActionContext<State, any>, payload: any) => any);

    public loadMeAsync = async (context: ActionContext<State, any>) => {
        const result = await userApi.getMeAsync();
        if (result.isError) {
            // Note(Matt): What do we do here? Do we log the user out?
        } else {
            context.commit('setUser', result.value);
        }
    }
}
