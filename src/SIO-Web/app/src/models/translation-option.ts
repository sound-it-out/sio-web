import { TranslationType } from '@/models/translation-type';

export interface TranslationOption {
    voice: string;
    type: TranslationType;
    filename: string;
    pricePerCharacter: number;
}