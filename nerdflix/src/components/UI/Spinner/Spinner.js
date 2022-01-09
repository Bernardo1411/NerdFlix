import React from "react";

import classes from "./Spinner.module.css";

const spinner = (props) => {
  const isFullPage = props.isFullPage;

  return (
    <div className={isFullPage ? classes.spinnerBody : ""}>
      <div className={classes.loader}>Loading...</div>
    </div>
  );
};

export default spinner;
