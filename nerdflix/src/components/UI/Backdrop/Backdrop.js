import React from 'react'

import './Backdrop.css'

const backDrop = (props) => {
    const close = () => {
        props.clicked(false)
    }

    return(
        <div onClick={close} className='backdrop'>
            <h1>Backdrop</h1>
        </div>
    )
}

export default backDrop