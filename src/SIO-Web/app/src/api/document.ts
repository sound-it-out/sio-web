import { Api } from '@/api/api';
import { Result } from '@/api/result';
import { UserDocument } from '@/models/user-document';
import { TranslationOption } from '@/models/translation-option';
import UploadRequest from './requests/upload-request';

export class DocumentApi extends Api {
    public constructor() {
        super();
    }

    public getDocumentsAsync(page: number, pageSize: number): Promise<Result<UserDocument[]>> {
        return this.getAsync<UserDocument[]>(`v1/document?page=${page}&pageSize=${pageSize}`);
    }

    public getTranslationOptions(): Promise<Result<TranslationOption[]>> {
        return this.getAsync<TranslationOption[]>('v1/document/translationoptions');
    }

    public upload(request: UploadRequest): Promise<Result<boolean>> {
        return this.postAsync('v1/document/upload', request);
    }
}
