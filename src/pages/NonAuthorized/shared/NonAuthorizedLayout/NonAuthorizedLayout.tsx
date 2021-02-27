import React from 'react';

import styles from './NonAuthorizedLayout.module.css';

interface ILocalProps {
  children: React.ReactNode;
}

const NonAuthorizedLayout: React.FC<ILocalProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default NonAuthorizedLayout;
