import { TranslationType } from '@/models/translation-type';

export default interface UploadRequest {
    file: File;
    translationType: TranslationType;
}
