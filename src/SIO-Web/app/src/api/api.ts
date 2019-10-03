import axios, { AxiosRequestConfig, CancelToken } from 'axios';
import { applyAuthenticationHeader, defaultResponseInterceptor, authResponseFailureInterceptor } from '@/api/interceptors/auth-interceptors';
import { Result } from '@/api/result';

export abstract class Api {

    protected constructor() {
        axios.interceptors.request.use(applyAuthenticationHeader);
        axios.interceptors.response.use(defaultResponseInterceptor, authResponseFailureInterceptor);
    }

    protected async getAsync<T>(url: string, data?: any, cancellationToken: CancelToken | null = null): Promise<Result<T>> {
        const response = await axios.get<T>(this.buildUrl(url), this.buildConfig(cancellationToken, data));

        if (!this.requestSuccessful(url, response)) {
           return Result.error('Some error message');
        }

        return Result.ok(response.data);
    }

    protected async postAsync<T>(url: string, data: any, cancellationToken: CancelToken | null = null): Promise<Result<T>> {
        const response = await axios.post(this.buildUrl(url), data, this.buildConfig(cancellationToken));


        if (!this.requestSuccessful(url, response)) {
            return Result.error('Some error message');
        }

        if (response.headers.location) {
            return Result.ok(response.headers.location);
        }

        return Result.ok(response.data);
    }

    protected async postFileAsync<T>(url: string, data: File, cancellationToken: CancelToken | null = null): Promise<Result<T>> {
        const formData: FormData = new FormData();
        formData.append('file', data);

        const config = this.buildConfig(cancellationToken);
        config.headers['Content-type'] = 'multipart/form-data';

        const response = await axios.post(this.buildUrl(url), formData, this.buildConfig(cancellationToken));

        if (!this.requestSuccessful(url, response)) {
            return Result.error('Some error message');
        }

        if (response.headers.location) {
            return Result.ok(response.headers.location);
        }

        return Result.ok(response.data);
    }

    protected async putAsync<T>(url: string, data: any, cancellationToken: CancelToken | null = null): Promise<Result<T>> {
        const response = await axios.put(this.buildUrl(url), data, this.buildConfig(cancellationToken));


        if (!this.requestSuccessful(url, response)) {
            return Result.error('Some error message');
        }

        if (response.headers.location) {
            return Result.ok(response.headers.location);
        }

        return Result.ok(response.data);
    }

    protected async deleteAsync<T>(url: string, data: any, cancellationToken: CancelToken | null = null): Promise<Result<T>> {
        const response = await axios.delete(this.buildUrl(url), this.buildConfig(cancellationToken));


        if (!this.requestSuccessful(url, response)) {
            return Result.error('Some error message');
        }

        if (response.headers.location) {
            return Result.ok(response.headers.location);
        }

        return Result.ok(response.data);
    }

    protected buildUrl(url: string): string {
        const location = window.location;
        let base = `${process.env.VUE_APP_API_URL}`;

        if (!base.endsWith('/')) {
            base += '/';
        }

        return `${base}${url}`;
    }

    protected buildConfig(cancellationToken: CancelToken | null, data?: any): AxiosRequestConfig {
        const config: AxiosRequestConfig = {
            cancelToken: cancellationToken || undefined,
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            params: data || undefined,
            validateStatus: (status: number) => {
                return status >= 200 && status < 300;
            },
            withCredentials: true,
        };

        return config;
    }

    private requestSuccessful(url: string, response: any): boolean {
        const hasError = (response && response.request.readyState === 4 && response.request.status === 0) || (response && response.response && (response.response.status < 200 || response.response.status >= 300));

        if (!hasError) {
            return true;
        }

        if (response.response.status === 403) {
            return false;
        }
        if (response.response.status === 404) {
            return false;
        }
        if (response.response.data.error) {
            return false;
        }
        if (response.response.data.errors) {
            return false;
        }

        return false;
    }
}
