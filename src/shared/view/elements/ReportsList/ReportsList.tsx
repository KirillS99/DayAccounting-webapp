import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { shallowEqual, useSelector } from 'react-redux';

import styles from './ReportsList.module.css';
import Report from './Report/Report';
import { selectReports } from 'features/reports/store/selectors';
import { IApplicationState } from 'setup/store';
import { IReport } from 'shared/models/Report';

dayjs.locale('ru');
interface IReportsListProps {
  activeDayValue: number;
}

const ReportsList: React.FC<IReportsListProps> = ({ activeDayValue }) => {
  const reportsListArray = useSelector(
    (state: IApplicationState) => selectReports(state),
    shallowEqual
  );

  const reports = useMemo(
    () =>
      reportsListArray.map((t: IReport) => (
        <Report key={t.id} item={t} activeDayValue={activeDayValue} />
      )),
    [reportsListArray, activeDayValue]
  );

  return (
    <div className={styles.root}>
      <div className={styles.list}>{reports}</div>
    </div>
  );
};

export default ReportsList;
