import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Project from "./Project/Project";
import Layout from "../components/Layout";

interface RouteToNavigateProps { }

interface RouteToNavigateState { }

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
        <Route path="" element={<Layout />} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/project" element={<Project />} />
        </Route>
      </Routes>
    );
  }
}

export default RouteToNavigate;
