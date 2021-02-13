export interface ICommunicationActionTypes<
  LoadingType extends string,
  SuccessType extends string,
  ErrorType extends string,
  ResetType extends string
> {
  loading: LoadingType;
  success: SuccessType;
  error: ErrorType;
  reset: ResetType;
}
