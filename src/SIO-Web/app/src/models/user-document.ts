import { DocumentCondition } from '@/models/document-condition';

export interface UserDocument {
    id: string;
    filename: string;
    condition: DocumentCondition;
    version: number;
}
