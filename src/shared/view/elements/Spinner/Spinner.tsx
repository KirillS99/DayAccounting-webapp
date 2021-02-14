import React from 'react';

import { ReactComponent as Spin } from './imgs/spin.svg';

import styles from './Spinner.module.css';

const Spinner: React.FC = () => {
  return (
    <div className={styles.root}>
      <Spin className={styles.spin} />
    </div>
  );
};

export default Spinner;
