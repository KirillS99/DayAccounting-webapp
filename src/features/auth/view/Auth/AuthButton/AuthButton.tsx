import React from 'react';
import Spinner from 'shared/view/elements/Spinner/Spinner';

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
    <a onClick={onClick}>
      <span>{isLoading ? <Spinner /> : icon}</span>
      {label}
    </a>
  );
};

export default AuthButton;
