import React, { useCallback } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import cn from 'classnames';

import styles from './Item.module.css';
import { IDayTimeLineItem } from 'shared/helpers/createMonthlyDaysArray';

interface ItemProps {
  item: IDayTimeLineItem;
  activeDayValue: number;
  setActiveDayValue: (a: number) => void;
}

const Item: React.FC<ItemProps> = ({
  item,
  activeDayValue,
  setActiveDayValue,
}) => {
  const onClick = useCallback(() => {
    setActiveDayValue(item.value);
  }, [item.value, setActiveDayValue]);

  return (
    <div
      onClick={onClick}
      className={cn(
        styles.root,
        item.isWeekend ? styles.weekend : '',
        item.isLastOfWeekend ? styles.isLastOfWeekend : '',
        item.value === activeDayValue ? styles.activeRoot : ''
      )}
    >
      <div className={styles.top}>{item.name}</div>
      <div className={styles.bottom}>{item.value}</div>
    </div>
  );
};

export default Item;
