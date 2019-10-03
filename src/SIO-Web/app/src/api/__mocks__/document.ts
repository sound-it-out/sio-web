import { Api } from '@/api/api';
import { Result } from '@/api/result';
import { UserDocument } from '@/models/user-document';
import { DocumentCondition } from '@/models/document-condition';

export class DocumentApi extends Api {
    public constructor() {
        super();
    }

    public getDocumentsAsync(): Promise<Result<UserDocument[]>> {
        const documents = [
            {
                id: 'Uploaded',
                condition: DocumentCondition.Uploaded,
                filename: 'Uploaded',
                version: 1,
            },
            {
                id: 'TranslationQueued',
                condition: DocumentCondition.TranslationQueued,
                filename: 'TranslationQueued',
                version: 2,
            },
            {
                id: 'TranslationStarted',
                condition: DocumentCondition.TranslationStarted,
                filename: 'TranslationStarted',
                version: 3,
            },
            {
                id: 'TranslationSucceded',
                condition: DocumentCondition.TranslationSucceded,
                filename: 'TranslationSucceded',
                version: 4,
            },
            {
                id: 'TranslationFailed',
                condition: DocumentCondition.TranslationFailed,
                filename: 'TranslationFailed',
                version: 4,
            },
        ] as UserDocument[];

        return Promise.resolve(Result.ok(documents));
    }
}
