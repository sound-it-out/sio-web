import { GetterTree } from 'vuex';
import { State } from '@/stores/document/state';
import { Route } from 'vue-router';
import { UserDocument } from '@/models/user-document';

export class Getters implements GetterTree<State, any> {
    [key: string]: (state: State, getters: any, rootState: any, rootGetters: any) => any;

    public documents = (state: State): UserDocument[] | null => {
        return state.documents;
    }
}