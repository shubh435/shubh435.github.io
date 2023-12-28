import React from "react";
interface FooterProps {}

interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <>Footer</>;
  }
}

export default Footer;
