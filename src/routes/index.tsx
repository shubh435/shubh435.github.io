import * as React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import PrivacyPolicy from "./PrivacyPolicy";
import TermCondition from "./TermCondition";
const Dashboard = React.lazy(() => import("./Dashboard"));
const Project = React.lazy(() => import("./Project/Project"));
const KeyboardButton = React.lazy(() => import("../components/KeyboardButton"));
const NoPageFound = React.lazy(() => import("./NoPageFoundPage"));

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
          <Route path="privacy-policy/*" element={<PrivacyPolicy />} />
          <Route path="term-condition/*" element={<TermCondition />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="project" element={<Project />} />
          </Route>
          <Route
            path=""
            element={
              <>
                {" "}
                <Outlet />
              </>
            }
          >
            <Route path="keyboardbutton" element={<KeyboardButton />} />
          </Route>

          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </React.Suspense>
    );
  }
}

export default RouteToNavigate;
