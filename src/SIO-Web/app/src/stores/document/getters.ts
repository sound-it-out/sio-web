import { GetterTree } from 'vuex';
import { State } from '@/stores/document/state';
import { UserDocument } from '@/models/user-document';

export const DOCUMENTS: string = 'document/documents';

export class Getters implements GetterTree<State, any> {
    [key: string]: (state: State, getters: any, rootState: any, rootGetters: any) => any;

    public documents = (state: State): UserDocument[] | null => {
        return state.documents;
    }
}
