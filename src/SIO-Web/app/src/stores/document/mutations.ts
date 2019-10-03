import { MutationTree } from 'vuex';
import { State } from '@/stores/document/state';
import { UserDocument } from '@/models/user-document';

export class Mutations implements MutationTree<State> {
    [key: string]: (state: State, payload: any) => any;

    public setDocuments = (state: State, documents: UserDocument[] | null) => {
        state.documents = documents;
    }
}
