import React from 'react'

import classes from './Button.module.css'

const button = props => {
    const {clicked, disabled} = props

    return (
        <button 
        className={classes.Button}
        disabled={disabled}
        onClick={clicked}>
            {props.children}
        </button>
    )
}

export default button