import { Api } from '@/api/api';
import { Result } from '@/api/result';
import { UserDocument } from '@/models/user-document';
import { DocumentCondition } from '@/models/document-condition';

export class DocumentApi extends Api {
    public constructor() {
        super();
    }
    
    public getDocumentsAsync() : Promise<Result<UserDocument[]>> {
        const documents = [
            {
                id: "test1",
                condition: DocumentCondition.Uploaded,
                filename: "test1",
                version: 0
            },
            {
                id: "test1",
                condition: DocumentCondition.Uploaded,
                filename: "test1",
                version: 0
            },
            {
                id: "test1",
                condition: DocumentCondition.Uploaded,
                filename: "test1",
                version: 0
            }
        ] as UserDocument[];

        const result = new Result<UserDocument[]>();
        result.value = documents;

        return Promise.resolve(result);
    }
}