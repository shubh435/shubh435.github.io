import React from "react"
import AboutUs from "../../components/AboutUs"
import Layout from "../../components/Layout"
import Slider from "../../components/Slider"
import Project from "../../components/Project"
interface DashboardProps {}

interface DashboardState {}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Layout>
        <Slider />
        <AboutUs />
        <Project />
      </Layout>
    )
  }
}

export default Dashboard
