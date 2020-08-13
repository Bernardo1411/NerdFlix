import React from 'react'

const button = props => {
    const {clicked} = props

    return (
        <button onClick={clicked}>
            {props.children}
        </button>
    )
}

export default button