import axios, { AxiosInstance } from 'axios';
import { AccessTokenManager } from '../../shared/managers/AccessTokenManager';

export interface IHttpMethodRequestSettings {
  url: string;
  data?: unknown;
}

const makeAuthorizationHeaders = (accessTokenManager: AccessTokenManager) => ({
  Authorization: `Bearer ${accessTokenManager.getAccessToken()}`,
});

export class BaseHttpService {
  private client: AxiosInstance;

  constructor(private accessTokenManager: AccessTokenManager) {
    this.client = axios.create();
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
