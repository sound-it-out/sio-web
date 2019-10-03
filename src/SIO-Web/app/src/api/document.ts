import { Api } from '@/api/api';
import { Result } from '@/api/result';
import { UserDocument } from '@/models/user-document';
import { TranslationOption } from '@/models/translation-option';

export class DocumentApi extends Api {
    public constructor() {
        super();
    }

    public getDocumentsAsync(): Promise<Result<UserDocument[]>> {
        return this.getAsync<UserDocument[]>('v1/document');
    }

    public getTranslationOptions(): Promise<Result<TranslationOption[]>> {
        return this.getAsync<TranslationOption[]>('vi/document/translationoptions');
    }
}
