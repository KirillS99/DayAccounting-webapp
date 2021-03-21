import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { AccessTokenManager } from '../../shared/managers/AccessTokenManager';

export interface IHttpMethodRequestSettings {
  url: string;
  data?: unknown;
}

const makeAuthorizationHeaders = (accessTokenManager: AccessTokenManager) => ({
  Authorization: `${accessTokenManager.getAccessToken()}`,
});

class ResponseErrorInterceptor {
  constructor(private accessTokenManager: AccessTokenManager) {}

  public intercept = (error: AxiosError): AxiosError => {
    if (error.code === '401' || error.code === '403') {
      this.accessTokenManager.removeAccessToken();
    }

    throw error;
  };
}

export class BaseHttpService {
  constructor(private accessTokenManager: AccessTokenManager) {
    axios.defaults.responseType = 'json';
    axios.defaults.timeout = 30000;
    axios.defaults.validateStatus = (status) =>
      (status >= 200 && status < 300) || status === 302;
    axios.interceptors.response.use(
      undefined,
      new ResponseErrorInterceptor(this.accessTokenManager).intercept
    );
  }

  public static addErrorInterceptor = (
    interceptor: (error: AxiosError<unknown>) => void
  ) => {
    axios.interceptors.response.use(undefined, interceptor);
  };

  protected get = <Response>({ url, data }: IHttpMethodRequestSettings) => {
    return axios.get<Response>(url, {
      params: data,
      headers: makeAuthorizationHeaders(this.accessTokenManager),
    });
  };

  protected post = <Response>({ url, data }: IHttpMethodRequestSettings) => {
    return axios.post<Response>(url, data, {
      headers: makeAuthorizationHeaders(this.accessTokenManager),
    });
  };

  protected delete = <Response>({ url, data }: IHttpMethodRequestSettings) => {
    return axios.delete<Response>(url, {
      params: data,
      headers: makeAuthorizationHeaders(this.accessTokenManager),
    });
  };
}
