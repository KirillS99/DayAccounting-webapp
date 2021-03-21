import dayjs from 'dayjs';
import { loadReportsByDay } from 'features/reports/store/actions';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTimestampByDay } from 'shared/helpers/getTimestampByDay';
import MontlyTimeline from 'shared/view/elements/MonthlyTimeline/MonthlyTimeline';
import ReportsList from 'shared/view/elements/ReportsList/ReportsList';

const OverviewPage: React.FC = () => {
  const dispatch = useDispatch();
  const [activeDayValue, setActiveDayValue] = useState(dayjs().get('date'));

  useEffect(() => {
    const activeDay = dayjs().date(activeDayValue).format('YYYY-MM-DD');
    const timestamp = getTimestampByDay(activeDay);
    dispatch(loadReportsByDay(timestamp));
  }, [activeDayValue, dispatch]);

  return (
    <div>
      <MontlyTimeline
        activeDayValue={activeDayValue}
        setActiveDayValue={setActiveDayValue}
      />
      <ReportsList />
    </div>
  );
};

export default OverviewPage;
