import React from 'react'

import Button from '../UI/Button/Button'

const confirmationCheck = props => {

    const confirm = () => {
        props.clicked(true)
    }

    const cancel = () => {
        props.clicked(false)
    }

    return(
        <div>
            <h3>Are you sure?</h3>
            <Button clicked={confirm}>OK</Button>
            <Button clicked={cancel}>Cancel</Button>
        </div>
    )
}

export default confirmationCheck