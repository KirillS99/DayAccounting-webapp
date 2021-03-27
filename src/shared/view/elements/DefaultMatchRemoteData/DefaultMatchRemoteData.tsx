/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import { CircularProgress } from '@material-ui/core';
import { ICommunication } from 'shared/models/Communication/Communication';

import { matchRemoteData } from 'shared/utils/communication/remoteData';

import styles from './DefaultMatchRemoteData.module.css';

interface ILocalProps<Data> {
  communication: ICommunication;
  data: Data;
  children: (success: Exclude<Data, null | undefined>) => JSX.Element;
}

const DefaultMatchRemoteData = <Data extends unknown>({
  communication,
  data,
  children,
}: ILocalProps<Data>) => {
  return matchRemoteData(communication, data, {
    notAsked: () => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </div>
    ),
    requesting: () => (
      <div className={styles.preloader}>
        <CircularProgress />
      </div>
    ),
    error: ({ error }) => {
      return <div>{error.toString()}</div>;
    },
    success: (loadedData) =>
      children(loadedData as Exclude<Data, null | undefined>),
  });
};

export default DefaultMatchRemoteData;
