export class Result<T> {
    public static ok<T>(value: T): Result<T> {
        const result = new Result<T>();
        result.value = value;
        return result;
    }

    public static error<T>(error: string): Result<T> {
        const result = new Result<T>();
        result.error = error;
        return result;
    }

    public error: string | null = null;
    public value: T | null = null;

    public get isError(): boolean {
        return this.error != null && this.value == null;
    }
}
