const ACCESS_TOKEN_ITEM_KEY = 'accessToken';

export class AccessTokenManager {
  constructor(private storage: Storage) {}

  public getAccessToken() {
    return this.storage.getItem(ACCESS_TOKEN_ITEM_KEY);
  }

  public setAccessToken(accessToken: string) {
    return this.storage.setItem(ACCESS_TOKEN_ITEM_KEY, accessToken);
  }
}
