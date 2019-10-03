export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    deleted: boolean;
    verified: boolean;
    characterTokens: number;
}
