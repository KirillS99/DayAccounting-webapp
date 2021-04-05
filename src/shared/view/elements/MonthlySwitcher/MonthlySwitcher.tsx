import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from '@material-ui/core';

import styles from './MonthlySwitcher.module.css';

interface MonthlySwitcher {
  activeMonthValue: number;
  setActiveMonthValue: (a: number) => void;
}

const MonthlySwitcher: React.FC<MonthlySwitcher> = ({
  activeMonthValue,
  setActiveMonthValue,
}) => {
  return (
    <div className={styles.root}>
      <Button onClick={() => setActiveMonthValue(activeMonthValue - 1)}>
        <ArrowBackIcon />
      </Button>
      <div className={styles.currentValue}>
        {dayjs().month(activeMonthValue).format('MMMM')}
      </div>

      <Button onClick={() => setActiveMonthValue(activeMonthValue + 1)}>
        <ArrowForwardIcon />
      </Button>
    </div>
  );
};

export default MonthlySwitcher;
