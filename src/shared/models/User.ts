export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  email: string;
  picture: string;
}

export interface IServerUser {
  id: number | string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  email: string;
  picture: string;
}
