import React from 'react'
import PropTypes from 'prop-types'

const card = props => {
    const { runningTime, IMDb, buyers, title } = props
    return (
        <div>
            <img src='' alt='Movie figure' />
            <div>
                <h4>{title}</h4>
                <p>Running Time: {runningTime} minutes</p>
                <p>IMDb: {IMDb}</p>
                <p>Buyers: {buyers}</p>
            </div>
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