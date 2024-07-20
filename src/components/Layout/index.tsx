import * as React from "react";
import DrawerAppBar from "../Appbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

interface LayoutProps {
  children?: React.ReactNode;
}

interface LayoutState { }

class Layout extends React.Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <DrawerAppBar />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Layout;
