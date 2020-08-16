import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../UI/Button/Button'

const card = props => {
    const { runningTime, IMDb, buyers, title, movieBuyer, showButton, image } = props

    const movieDataProvider = (e) => {
        e.preventDefault()
        movieBuyer({
            title,
            IMDb,
            runningTime,
            image,
            buyers
        })
    }

    let button = showButton ? <Button clicked={movieDataProvider} >Buy Now</Button> : null

    return (
        <div>
            <img src={image} alt='Movie figure' />
            <div>
                <h4>{title}</h4>
                <p>Running Time: {runningTime} minutes</p>
                <p>IMDb: {IMDb}</p>
                <p>Buyers: {buyers}</p>
            </div>
            {button}
        </div>
    )
}

card.propTypes = {
    runningTime: PropTypes.number.isRequired,
    IMDb: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    buyers: PropTypes.number.isRequired
}

export default card