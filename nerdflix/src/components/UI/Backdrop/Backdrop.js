import React from "react";

import "./Backdrop.css";

const backDrop = (props) => {
  const close = () => {
    props.clicked(false);
  };

  return <div onClick={close} className="backdrop"></div>;
};

export default backDrop;
