import React, { Component } from "react";

import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import "./Layout.css";

class Layout extends Component {
  render() {
    return (
      <div className="main-page_layout">
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
