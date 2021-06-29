import React from 'react'

import './confirmationCheck.css'

const confirmationCheck = props => {

    return (
        <div className='confirmationCheck'>
            {props.children}
        </div>
    )
}

export default confirmationCheck