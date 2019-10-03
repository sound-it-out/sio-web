import { UserDocument } from '@/models/user-document';
import { TranslationOption } from '@/models/translation-option';

export class State {
    public documents: UserDocument[] | null = null;
    public translationOptions: TranslationOption[] | null = null;
}
