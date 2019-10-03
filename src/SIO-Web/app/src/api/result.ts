export class Result<T> {
    public error: string | null = null;
    public value: T | null = null;

    public get isError(): boolean {
        return this.error != null && this.value == null;
    }
}