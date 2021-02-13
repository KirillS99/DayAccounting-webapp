import axios, { AxiosError, AxiosInstance } from 'axios';
import { AccessTokenManager } from '../../shared/managers/AccessTokenManager';

export interface IHttpMethodRequestSettings {
  url: string;
  data?: unknown;
}

const makeAuthorizationHeaders = (accessTokenManager: AccessTokenManager) => ({
  Authorization: `Bearer ${accessTokenManager.getAccessToken()}`,
});

class ResponseErrorInterceptor {
  constructor(private accessTokenManager: AccessTokenManager) {}

  public intercept = (error: AxiosError): AxiosError => {
    if (error.code === '401') {
      this.accessTokenManager.removeAccessToken();
    }

    return error;
  };
}

export class BaseHttpService {
  private client: AxiosInstance;

  constructor(private accessTokenManager: AccessTokenManager) {
    this.client = axios.create();
    this.client.defaults.responseType = 'json';
    this.client.defaults.timeout = 30000;
    this.client.defaults.validateStatus = (status) =>
      (status >= 200 && status < 300) || status === 302;
    this.client.interceptors.response.use(
      undefined,
      new ResponseErrorInterceptor(this.accessTokenManager).intercept
    );
  }

  protected get = <Response>({ url, data }: IHttpMethodRequestSettings) => {
    return this.client.get<Response>(url, {
      params: data,
      headers: makeAuthorizationHeaders(this.accessTokenManager),
    });
  };

  protected post = <Response>({ url, data }: IHttpMethodRequestSettings) => {
    return this.client.post<Response>(url, data, {
      headers: makeAuthorizationHeaders(this.accessTokenManager),
    });
  };

  protected delete = <Response>({ url, data }: IHttpMethodRequestSettings) => {
    return this.client.delete<Response>(url, {
      params: data,
      headers: makeAuthorizationHeaders(this.accessTokenManager),
    });
  };
}
