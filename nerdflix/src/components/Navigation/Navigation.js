import React from "react";

import NavigationItems from "./NavigationItems/NavigationItems";
import Logo from "../UI/Logo/Logo";
import "./Navigation.css";

const navigation = (props) => {
  return (
    <nav className="main_nav">
      <Logo />
      <NavigationItems />
    </nav>
  );
};

export default navigation;
