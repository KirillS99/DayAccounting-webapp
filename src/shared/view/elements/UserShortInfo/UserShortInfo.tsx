import dayjs from 'dayjs';
import React from 'react';
import { IUser } from 'shared/models/User';

import styles from './UserShortInfo.module.css';

interface IUserShortInfoProps {
  user: IUser | null;
  reportCreatedAt?: Date | string;
}
const UserShortInfo: React.FC<IUserShortInfoProps> = ({
  user,
  reportCreatedAt,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.pictureContainer}>
        <img src={user?.picture} className={styles.picture} />
      </div>
      <div className={styles.body}>
        <div className={styles.email}>{user?.email}</div>
        {reportCreatedAt && (
          <div className={styles.reportCreatedAt}>
            {dayjs(reportCreatedAt).format('HH:mm DD/MM')}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserShortInfo;
