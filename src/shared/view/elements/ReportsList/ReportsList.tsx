import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { shallowEqual, useSelector } from 'react-redux';

import styles from './ReportsList.module.css';
import Item from './Item/Item';
import { selectReports } from 'features/reports/store/selectors';
import { IApplicationState } from 'setup/store';
import { IReport } from 'shared/models/Report';

dayjs.locale('ru');

const ReportsList: React.FC = () => {
  const reportsListArray = useSelector(
    (state: IApplicationState) => selectReports(state),
    shallowEqual
  );

  const reports = useMemo(
    () => reportsListArray.map((t: IReport) => <Item key={t.id} item={t} />),
    [reportsListArray]
  );

  return (
    <div className={styles.root}>
      <div className={styles.list}>{reports}</div>
    </div>
  );
};

export default ReportsList;
