import React from "react";
import Layout from "../../components/Layout";
interface DashboardProps {}

interface DashboardState {}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <Layout>Dashboard</Layout>;
  }
}

export default Dashboard;
