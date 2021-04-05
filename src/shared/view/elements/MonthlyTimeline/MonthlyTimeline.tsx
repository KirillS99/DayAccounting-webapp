import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import styles from './MonthlyTimeline.module.css';
import { createMonthlyDaysArray } from 'shared/helpers/createMonthlyDaysArray';
import Item from './Item/Item';

dayjs.locale('ru');

interface MonthlyTimeline {
  activeDayValue: number;
  activeMonthValue: number;
  setActiveDayValue: (a: number) => void;
}

const MontlyTimeline: React.FC<MonthlyTimeline> = ({
  activeDayValue,
  activeMonthValue,
  setActiveDayValue,
}) => {
  const daysInMonth = dayjs().month(activeMonthValue).daysInMonth();

  const daysList = useMemo(
    () =>
      createMonthlyDaysArray(daysInMonth, activeMonthValue).map((t) => (
        <Item
          key={t.value}
          item={t}
          activeDayValue={activeDayValue}
          setActiveDayValue={setActiveDayValue}
        />
      )),
    [daysInMonth, activeDayValue, setActiveDayValue, activeMonthValue]
  );

  return <div className={styles.root}>{daysList}</div>;
};

export default MontlyTimeline;
