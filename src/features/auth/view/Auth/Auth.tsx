import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { loginByGoogle } from 'features/auth/store/actions';
import { selectAuthenticatingByGoogle } from 'features/auth/store/selectors';
import { IApplicationState } from 'setup/store';
import { Button } from '@material-ui/core';

import AuthButton from './AuthButton/AuthButton';
import styles from './Auth.module.css';

const mapStateToProps = (state: IApplicationState) => {
  return {
    authenticatingByGoogle: selectAuthenticatingByGoogle(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      loginByGoogle: loginByGoogle,
    },
    dispatch
  );
};

interface ILocalProps {}

type IProps = ILocalProps &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Auth: React.FC<IProps> = ({ authenticatingByGoogle, loginByGoogle }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Button
          href={`https://day-accounting.herokuapp.com/api/google?authRedirect=${location.origin}`}
        >
          Google
        </Button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
