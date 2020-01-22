import { ActionTree, ActionContext } from 'vuex';
import { State } from '@/stores/document/state';
import { DocumentApi } from '@/api/document';

const documentApi = new DocumentApi();

export const LOAD_DOCUMENTS: string = 'document/loadDocumentsAsync';
export const LOAD_TRANSLATION_OPTIONS: string = 'document/loadTranslationOptionsAsync';

export class Actions implements ActionTree<State, any> {
    [key: string]: ((injectee: ActionContext<State, any>, payload: any) => any);

    public loadDocumentsAsync = async (context: ActionContext<State, any>) => {
        const result = await documentApi.getDocumentsAsync(1, 25);
        if (result.isError) {
            // Note(Matt): What do we do here? Do we log the user out? Do we just assume they have no documents?
        } else {
            context.commit('setDocuments', result.value);
        }
    }

    public loadTranslationOptionsAsync = async (context: ActionContext<State, any>) => {
        const result = await documentApi.getTranslationOptions();
        if (result.isError) {
            // Note(Matt): What do we do here? Do we log the user out? Do we just assume there isn't any translation options?
        } else {
            context.commit('setTranslationOptions', result.value);
        }
    }
}
