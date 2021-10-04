import React from 'react';

const rightArrow = props => {

    return(
        <div className='fowardArrow' onClick={props.goToNextSlide}>
            <p>{'>'}</p>
        </div>
    )
}

export default rightArrow