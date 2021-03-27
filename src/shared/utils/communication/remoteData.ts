import { AppError } from 'shared/models/AppError';
import {
  ICommunication,
  initialCommunication,
} from 'shared/models/Communication/Communication';
import { RecordFromUnion } from '../types/utilityTypes';
import * as R from 'ramda';

export type CommunicationState =
  | 'notAsked'
  | 'requesting'
  | 'success'
  | 'error';

export type IRemoteData<Data> =
  | { type: 'notAsked' }
  | { type: 'requesting' }
  | { type: 'error'; data: { error: AppError } }
  | { type: 'success'; data: Data };

type IRemoteDataMatchers<Data, Result> = RecordFromUnion<
  IRemoteData<Data>['type'],
  {
    notAsked: () => Result;
    requesting: () => Result;
    error: (data: { error: Error; data: Data | undefined | null }) => Result;
    success: (data: Exclude<Data, null | undefined>) => Result;
  }
>;

export function matchRemoteData<Data, Result>(
  communication: ICommunication,
  data: Data | undefined | null,
  matchers: IRemoteDataMatchers<Data, Result>
): Result {
  if (R.equals(communication, initialCommunication)) {
    return matchers.notAsked();
  }
  if (communication.isLoading) {
    return matchers.requesting();
  }
  if (communication.error || !data) {
    return matchers.error({
      error: communication.error || new AppError('undefined error'),
      data,
    });
  }
  if (communication.isSuccess) {
    return matchers.success(data as Exclude<Data, null | undefined>);
  }
  return matchers.notAsked();
}
