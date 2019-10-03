import { MutationTree } from 'vuex';
import { State } from '@/stores/document/state';
import { UserDocument } from '@/models/user-document';
import { TranslationOption } from '@/models/translation-option';

export class Mutations implements MutationTree<State> {
    [key: string]: (state: State, payload: any) => any;

    public setDocuments = (state: State, documents: UserDocument[] | null) => {
        state.documents = documents;
    }

    public setTranslationOptions = (state: State, translationOptions: TranslationOption[] | null) => {
        state.translationOptions = translationOptions;
    }
}
