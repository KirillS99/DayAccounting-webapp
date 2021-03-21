import React from 'react';

import { ReactComponent as Logo } from 'shared/img/logo.svg';

import styles from './Header.module.css';
import MainMenu from './MainMenu/MainMenu';

const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </div>
      <MainMenu />
    </header>
  );
};

export default Header;
