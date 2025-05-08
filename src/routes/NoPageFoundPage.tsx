import React from "react";
import { Link } from "react-router-dom";

interface NoPageFoundProps {}

interface NoPageFoundState {}

class NoPageFound extends React.Component<NoPageFoundProps, NoPageFoundState> {
  constructor(props: NoPageFoundProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="no-page-found-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops! Page Not Found</h2>
        <p className="error-description">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="home-button">
          Go Back to Home
        </Link>
      </div>
    );
  }
}

export default NoPageFound;
