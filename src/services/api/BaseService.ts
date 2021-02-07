import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IHttpMethodRequestSettings {
  url: string;
  data?: unknown;
  config?: AxiosRequestConfig;
}

export class BaseService {
  private client: AxiosInstance;

  constructor(accessToken: string) {
    this.client = axios.create({
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  protected get = <Response>({
    url,
    data,
    config,
  }: IHttpMethodRequestSettings) => {
    return this.client.get<Response>(url, {
      params: data,
      ...config,
    });
  };

  protected post = <Response>({
    url,
    data,
    config,
  }: IHttpMethodRequestSettings) => {
    return this.client.post<Response>(url, data, config);
  };

  protected delete = <Response>({
    url,
    data,
    config,
  }: IHttpMethodRequestSettings) => {
    return this.client.delete<Response>(url, {
      params: data,
      ...config,
    });
  };
}
