import { GetterTree } from 'vuex';
import { State } from '@/stores/document/state';
import { TranslationOption } from '@/models/translation-option';

export const TRANSLATION_OPTIONS: string = 'document/translationOptions';

export class Getters implements GetterTree<State, any> {
    [key: string]: (state: State, getters: any, rootState: any, rootGetters: any) => any;
    public translationOptions = (state: State): TranslationOption[] | null => {
        return state.translationOptions;
    }
}
