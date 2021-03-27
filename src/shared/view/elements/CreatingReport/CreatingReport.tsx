import React, { useCallback, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import styles from './CreatingReport.module.css';
import { Button } from '@material-ui/core';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentUser,
  selectCurrentUserOrThrowError,
} from 'features/users/store/selectors';
import Report from '../ReportsList/Report/Report';
import { selectReports } from 'features/reports/store/selectors';

interface CreatingReportProps {
  activeDayValue: number;
}

const CreatingReport: React.FC<CreatingReportProps> = ({ activeDayValue }) => {
  const [isOpenEditing, setOpenedEditing] = useState<boolean>(false);
  const currentUser = useSelector(selectCurrentUserOrThrowError, shallowEqual);
  const reportsLst = useSelector(selectReports, shallowEqual);

  const userHasReportToday = reportsLst.some(
    (t) => t.user.id === currentUser.id
  );
  const onEditingButtonClick = useCallback(() => {
    setOpenedEditing((prevState) => !prevState);
  }, []);

  return !userHasReportToday ? (
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
            updatedAt: dayjs().toISOString(),
          }}
          setOpenedCreateEditing={setOpenedEditing}
          isCreate
        />
      )}
    </div>
  ) : null;
};

export default CreatingReport;
