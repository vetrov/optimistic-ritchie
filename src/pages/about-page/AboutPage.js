import React from "react";
import { Link } from "react-router-dom";

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>This is about page content</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default AboutPage;
