import { GetterTree } from 'vuex';
import { State } from '@/stores/document/state';
import { UserDocument } from '@/models/user-document';
import { TranslationOption } from '@/models/translation-option';

export const DOCUMENTS: string = 'document/documents';
export const TRANSLATION_OPTIONS: string = 'document/translationOptions';

export class Getters implements GetterTree<State, any> {
    [key: string]: (state: State, getters: any, rootState: any, rootGetters: any) => any;

    public documents = (state: State): UserDocument[] | null => {
        return state.documents;
    }

    public translationOptions = (state: State): TranslationOption[] | null => {
        return state.translationOptions;
    }
}
