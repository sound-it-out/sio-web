import { Api } from '@/api/api';
import { Result } from '@/api/result';
import { UserDocument } from '@/models/user-document';
import { DocumentCondition } from '@/models/document-condition';
import { TranslationOption } from '@/models/translation-option';
import { TranslationType } from '@/models/translation-type';

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

    public getTranslationOptions(): Promise<Result<TranslationOption[]>> {
        const translationOptions = [
            {
                voice: 'Aws',
                filename: 'Aws',
                pricePerCharacter: 0.005,
                type: TranslationType.Aws
            },
            {
                voice: 'Azure',
                filename: 'Azure',
                pricePerCharacter: 0.005,
                type: TranslationType.Azure
            },
            {
                voice: 'Custom',
                filename: 'Custom',
                pricePerCharacter: 0.005,
                type: TranslationType.Custom
            },
            {
                voice: 'Google',
                filename: 'Google',
                pricePerCharacter: 0.005,
                type: TranslationType.Google
            }
        ] as TranslationOption[];

        return Promise.resolve(Result.ok(translationOptions));
    }
}
