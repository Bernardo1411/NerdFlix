import React from 'react'

const backDrop = (props) => {
    const close = () => {
        props.clicked(false)
    }

    return(
        <div onClick={close}>
            <h1>Backdrop</h1>
        </div>
    )
}

export default backDrop