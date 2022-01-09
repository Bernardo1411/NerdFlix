import React, { Fragment } from "react";

import ConfirmationCheck from "../../confirmationCheck/confirmationCheck";
import Button from "../Button/Button";
import "./Modal.css";

const Modal = (props) => {
  const { isAlert, message, clicked, display } = props;

  const confirm = () => {
    clicked(true);
  };

  const cancel = () => {
    clicked(false);
  };

  let modalDisplay = (
    <Fragment>
      {!isAlert ? (
        <ConfirmationCheck clicked={clicked} display={display}>
          <p>{message}</p>
          <div className="modal_div--button">
            <Button clicked={cancel} modal cancel>
              Cancel
            </Button>
            <Button clicked={confirm} modal>
              OK
            </Button>
          </div>
        </ConfirmationCheck>
      ) : (
        <ConfirmationCheck display={display} clicked={clicked}>
          <p>{message}</p>
        </ConfirmationCheck>
      )}
      {props.children}
    </Fragment>
  );

  return modalDisplay;
};

export default Modal;
