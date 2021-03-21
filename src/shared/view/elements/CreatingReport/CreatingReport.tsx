import React, { useCallback, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import styles from './CreatingReport.module.css';
import { Button } from '@material-ui/core';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from 'features/users/store/selectors';
import Report from '../ReportsList/Report/Report';

interface CreatingReportProps {
  activeDayValue: number;
}

const CreatingReport: React.FC<CreatingReportProps> = ({ activeDayValue }) => {
  const [isOpenEditing, setOpenedEditing] = useState<boolean>(false);
  const currentUser = useSelector(selectCurrentUser, shallowEqual);

  const onEditingButtonClick = useCallback(() => {
    setOpenedEditing((prevState) => !prevState);
  }, []);
  return (
    <div className={styles.root}>
      {!isOpenEditing ? (
        <div className={styles.buttonContainer}>
          <Button color="secondary" onClick={onEditingButtonClick}>
            Добавить
          </Button>
        </div>
      ) : (
        <Report
          activeDayValue={activeDayValue}
          item={{
            id: '0',
            user: currentUser,
            text: '',
            totalTime: 300,
            createdAt: new Date(),
          }}
          setOpenedCreateEditing={setOpenedEditing}
          isCreate
        />
      )}
    </div>
  );
};

export default CreatingReport;
