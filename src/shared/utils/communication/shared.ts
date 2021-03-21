import { AppError } from 'shared/models/AppError';
import { IThunkDeps } from 'shared/types/redux';

export interface ICommunicateFuncArgs<RequestPayload> {
  payload: RequestPayload;
  deps: IThunkDeps;
}

export type CommunicateFunc<RequestPayload, SuccessPayload> = (
  args: ICommunicateFuncArgs<RequestPayload>
) => Promise<SuccessPayload>;

export interface ICommunicationByIdPayload {
  id: string;
}

export type ICommunicationByIdSuccessPayload<Data> = Data &
  ICommunicationByIdPayload;

export interface ICommunicationByIdErrorPayload
  extends ICommunicationByIdPayload {
  error: AppError;
}
