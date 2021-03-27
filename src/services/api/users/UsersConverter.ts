import { IUser, IServerUser } from 'shared/models/User';

export const convertUser = (data: IServerUser): IUser => {
  return {
    ...data,
    id: data.id.toString(),
  };
};
