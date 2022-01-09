import React from "react";
import { CSSTransition } from "react-transition-group";
import { Fragment } from "react/cjs/react.production.min";
import BackDrop from "../UI/Backdrop/Backdrop";

import "./confirmationCheck.css";

const ConfirmationCheck = (props) => {
  const { children, display, clicked } = props;

  return (
    <Fragment>
      <CSSTransition
        in={display}
        timeout={500}
        classNames="fading"
        mountOnEnter
        unmountOnExit
      >
        <BackDrop clicked={() => clicked()} />
      </CSSTransition>
      <CSSTransition
        in={display}
        timeout={500}
        classNames="movement"
        mountOnEnter
        unmountOnExit
      >
        <div className="confirmationCheck">{children}</div>
      </CSSTransition>
    </Fragment>
  );
};

export default ConfirmationCheck;
