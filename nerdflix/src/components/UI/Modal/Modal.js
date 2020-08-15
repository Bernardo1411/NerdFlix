import React, { Fragment } from 'react'

import ConfirmationCheck from '../../confirmationCheck/confirmationCheck'
import BackDrop from '../Backdrop/Backdrop'

const modal = props => {

    let modalDisplay = props.children

    if (props.display) {
        modalDisplay =
            <Fragment>
                <BackDrop clicked={props.clicked}/>
                <h1>Modal</h1>
                <ConfirmationCheck clicked={props.clicked}/>
                {props.children}
            </Fragment>
    }

    return modalDisplay
}

export default modal