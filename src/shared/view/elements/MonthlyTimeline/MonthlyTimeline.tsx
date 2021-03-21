import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import styles from './MonthlyTimeline.module.css';
import { createMonthlyDaysArray } from 'shared/helpers/createMonthlyDaysArray';
import Item from './Item/Item';

dayjs.locale('ru');

interface MonthlyTimeline {
  activeDayValue: number;
  setActiveDayValue: (a: number) => void;
}

const MontlyTimeline: React.FC<MonthlyTimeline> = ({
  activeDayValue,
  setActiveDayValue,
}) => {
  const daysInMonth = dayjs().daysInMonth();

  const daysList = useMemo(
    () =>
      createMonthlyDaysArray(daysInMonth).map((t) => (
        <Item
          key={t.value}
          item={t}
          activeDayValue={activeDayValue}
          setActiveDayValue={setActiveDayValue}
        />
      )),
    [daysInMonth, activeDayValue, setActiveDayValue]
  );

  return <div className={styles.root}>{daysList}</div>;
};

export default MontlyTimeline;
