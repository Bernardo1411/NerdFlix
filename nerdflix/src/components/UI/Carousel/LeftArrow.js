import React from 'react';

const leftArrow = props => {

    return(
        <div className='backArrow' onClick={props.goToPrevSlide}>
            <p>{'<'}</p>
        </div>
    )
}

export default leftArrow