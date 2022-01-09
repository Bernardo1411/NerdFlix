import React from 'react'

import './Button.css'

const button = props => {
    const {clicked, disabled, cancel, receipt, modal} = props;

    return (
        <button 
        className={`Button ${cancel && "cancel"} ${receipt && "receipt"} ${modal && "modal"}`}
        disabled={disabled}
        onClick={clicked}>
            {props.children}
        </button>
    )
}

export default button