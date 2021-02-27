import React from 'react';

import { Button } from '@material-ui/core';

import Spinner from 'shared/view/elements/Spinner/Spinner';

import styles from './AuthButton.module.css';

interface ILocalProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  isLoading: boolean;
}

const AuthButton: React.FC<ILocalProps> = ({
  label,
  icon,
  onClick,
  isLoading,
}) => {
  return (
    <Button
      className={styles.root}
      disabled={isLoading}
      onClick={onClick}
      startIcon={isLoading ? <Spinner /> : icon}
      classes={{
        startIcon: styles.icon,
      }}
      color="primary"
    >
      {label}
    </Button>
  );
};

export default AuthButton;
