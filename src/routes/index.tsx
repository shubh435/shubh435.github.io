import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import UiComponents from "./Component/UiComponents";
const Dashboard = React.lazy(() => import("./Dashboard"));
const Project = React.lazy(() => import("./Project/Project"));

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

  Loader: React.FC = () => {
    return (
      <div className="loader-container">
        <div className="loader" />
      </div>
    );
  };

  render() {
    const { Loader } = this;
    return (
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route  index element={<Dashboard />} />
            <Route path="/project" element={<Project />} />
          </Route>
          <Route path="" element={<> <Outlet /></>}>
            <Route path="/uiComponent" element={<UiComponents />} />
          </Route>
        </Routes>
      </React.Suspense>
    );
  }
}

export default RouteToNavigate;
