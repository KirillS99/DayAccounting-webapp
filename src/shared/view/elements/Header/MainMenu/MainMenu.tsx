import React, { useCallback, useMemo, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { ReactComponent as Logo } from 'shared/img/logo.svg';
import { navigationItems } from 'shared/utils/constants/navigation';

import styles from './MainMenu.module.css';
import MainMenuItem from './MainMenuItem/MainMenuItem';

const MainMenu: React.FC = () => {
  const indicatorRef = useRef<HTMLDivElement>(null);

  const setIndicatorPosition = useCallback(
    (offsetLeft: number, elementWidth: number) => {
      if (indicatorRef.current) {
        indicatorRef.current.setAttribute(
          'style',
          `
      width: ${elementWidth}px;
      left: ${offsetLeft}px
      `
        );
      }
    },
    []
  );

  const items = useMemo(
    () =>
      navigationItems.map((t) => (
        <MainMenuItem
          key={t.link}
          item={t}
          setIndicatorPosition={setIndicatorPosition}
        />
      )),
    []
  );
  return (
    <nav className={styles.root}>
      {items}
      <div ref={indicatorRef} className={styles.indicator} />
    </nav>
  );
};

export default MainMenu;
