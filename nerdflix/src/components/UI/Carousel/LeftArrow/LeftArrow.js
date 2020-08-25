import React from 'react'

import './LeftArrow.css'

const leftArrow = props => {

    return(
        <div className='backArrow' onClick={props.goToPrevSlide}>
            <p>{'<'}</p>
        </div>
    )
}

export default leftArrow