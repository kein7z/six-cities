import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../const';
import * as React from 'react';
import { useAppSelector } from '../hooks';
import { getAuthorizationStatus } from '../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {

  const authStatus = useAppSelector(getAuthorizationStatus);

  return (
    authStatus === AuthorizationStatus.Auth
      ? props.children
      : <Navigate to={AppRoute.Login} />
  );
};

export default PrivateRoute;
