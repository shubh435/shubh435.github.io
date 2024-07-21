import React from "react";
import {
  Location,
  NavigateFunction,
  useLocation,
  useNavigate,
} from "react-router-dom";

const withRouter = (Child: any) => {
  return (props: any) => {
    const navigate: NavigateFunction = useNavigate();
    const location: Location = useLocation();
    return <Child navigate={navigate} location={location} {...props} />;
  };
};

export default withRouter;