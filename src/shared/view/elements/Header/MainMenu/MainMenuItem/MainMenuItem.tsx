import React, { useEffect, useMemo, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

import { ReactComponent as Logo } from 'shared/img/logo.svg';
import {
  INavigationItem,
  navigationItems,
} from 'shared/utils/constants/navigation';

import styles from './MainMenuItem.module.css';
import { LocationState } from 'shared/utils/types/location';

interface MainMenuItemProps {
  item: INavigationItem;
  setIndicatorPosition: (a: number, b: number) => void;
}

const MainMenuItem: React.FC<MainMenuItemProps> = ({
  item,
  setIndicatorPosition,
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const location = useLocation<LocationState>();

  const isActive = location.pathname === item.link;

  useEffect(() => {
    if (isActive && ref.current) {
      setIndicatorPosition(ref.current.offsetLeft, ref.current.clientWidth);
    }
  }, [isActive]);

  return (
    <NavLink
      ref={ref}
      key={item.link}
      to={item.link}
      className={styles.link}
      activeClassName={cn(styles.activeLink, styles.link)}
    >
      {item.text}
    </NavLink>
  );
};

export default MainMenuItem;
