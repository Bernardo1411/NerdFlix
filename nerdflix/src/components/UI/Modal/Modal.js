import React, { Fragment } from 'react'

const modal = props => {

    let modalDisplay = props.children

    if (props.display) {
        modalDisplay =
            <Fragment>
                <h1>Modal</h1>
                {props.children}
            </Fragment>
    }

    return modalDisplay
}

export default modal