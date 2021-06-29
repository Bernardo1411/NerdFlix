import React, { Fragment } from 'react'

import ConfirmationCheck from '../../confirmationCheck/confirmationCheck'
import Button from '../Button/Button'
import BackDrop from '../Backdrop/Backdrop'
import './Modal.css'

const modal = props => {
    const { isAlert } = props

    const confirm = () => {
        props.clicked(true)
    }

    const cancel = () => {
        props.clicked(false)
    }

    let modalDisplay = props.children

    if (props.display) {
        modalDisplay =
            <Fragment>
                <BackDrop clicked={props.clicked} />
                {
                    !isAlert ?
                        <ConfirmationCheck clicked={props.clicked}>
                            <Button clicked={confirm}>OK</Button>
                            <Button clicked={cancel}>Cancel</Button>
                        </ConfirmationCheck> :
                        <ConfirmationCheck>
                            <p>Added to your basket</p>
                        </ConfirmationCheck>
                }
                {props.children}
            </Fragment>
    }

    return modalDisplay
}

export default modal