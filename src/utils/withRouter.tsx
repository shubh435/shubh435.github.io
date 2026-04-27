import React from 'react';
import { Location, NavigateFunction, useLocation, useNavigate } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withRouter = (Child: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: any) => {
    const navigate: NavigateFunction = useNavigate();
    const location: Location = useLocation();
    return <Child navigate={navigate} location={location} {...props} />;
  };
};

export default withRouter;
