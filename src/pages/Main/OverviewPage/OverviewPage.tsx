import dayjs from 'dayjs';
import { loadReportsByDay } from 'features/reports/store/actions';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTimestampByDay } from 'shared/helpers/getTimestampByDay';
import CreatingReport from 'shared/view/elements/CreatingReport/CreatingReport';
import MonthlySwitcher from 'shared/view/elements/MonthlySwitcher/MonthlySwitcher';
import MontlyTimeline from 'shared/view/elements/MonthlyTimeline/MonthlyTimeline';
import ReportsList from 'shared/view/elements/ReportsList/ReportsList';

import styles from './OverviewPage.module.css';

const OverviewPage: React.FC = () => {
  const dispatch = useDispatch();
  const [activeDayValue, setActiveDayValue] = useState(dayjs().get('date'));
  const [activeMonthValue, setActiveMonthValue] = useState(
    dayjs().get('month')
  );

  useEffect(() => {
    const date = dayjs(
      `${dayjs().get('year')}-${activeMonthValue + 1}-${activeDayValue}`
    ).format('YYYY-MM-DD');
    // const timestamp = getTimestampByDay(activeDay);
    dispatch(loadReportsByDay(date));
  }, [activeDayValue, dispatch, activeMonthValue]);

  return (
    <div className={styles.root}>
      <MonthlySwitcher
        activeMonthValue={activeMonthValue}
        setActiveMonthValue={setActiveMonthValue}
      />
      <MontlyTimeline
        activeMonthValue={activeMonthValue}
        activeDayValue={activeDayValue}
        setActiveDayValue={setActiveDayValue}
      />
      <CreatingReport activeDayValue={activeDayValue} />
      <ReportsList activeDayValue={activeDayValue} />
    </div>
  );
};

export default OverviewPage;
