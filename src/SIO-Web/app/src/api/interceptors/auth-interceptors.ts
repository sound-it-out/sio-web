import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import userManager from '@/services/user-manager/user-manager';

export async function defaultResponseInterceptor(response: AxiosResponse<any>): Promise<AxiosResponse<any>> {
    return response;
}

export async function authResponseFailureInterceptor(error: any): Promise<any> {
    if (error.response && error.response.status === 401) {
        if (error.config && !error.config.__isRetryRequest) {
            await userManager.signinSilent();
            error.config.__isRetryRequest = true;
            return axios(error.config);
        } else {
            
        }
    }

    return error;
}

export async function applyAuthenticationHeader(config: AxiosRequestConfig): Promise<AxiosRequestConfig> {
    const user = await userManager.getUser();

    if (user != null) {
        config.headers.Authorization = `Bearer ${user.access_token}`;
    }

    return config;
}