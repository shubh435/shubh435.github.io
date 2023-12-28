import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

interface RouteToNavigateProps {}

interface RouteToNavigateState {}

class RouteToNavigate extends React.Component<
  RouteToNavigateProps,
  RouteToNavigateState
> {
  constructor(props: RouteToNavigateProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    );
  }
}

export default RouteToNavigate;
