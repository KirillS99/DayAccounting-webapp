import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { loginByGoogle } from 'features/auth/store/actions';
import { selectAuthenticatingByGoogle } from 'features/auth/store/selectors';
import { IApplicationState } from 'setup/store';

import AuthButton from './AuthButton/AuthButton';

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
    <div>
      <div>
        <AuthButton
          label="Login by Google"
          onClick={loginByGoogle}
          isLoading={authenticatingByGoogle.isLoading}
          icon={'asfd'}
        />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
