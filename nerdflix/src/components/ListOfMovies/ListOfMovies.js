import React, { memo } from 'react'

import Card from './Card/Card'
import './ListOfMovies.css'

const listOfMovies = props => {
    const { movies, movieBuyer, showButton, cancel } = props

    const isFullObject = movies => {
        return (!!movies) && Object.getPrototypeOf(movies) === Object.prototype && Object.keys(movies).length !== 0
    }

    const listOfMovies = isFullObject(movies) ? Object.keys(movies).map(movieId => {
        const movie = movies[movieId]

        return <Card key={movieId}
            cancel={cancel}
            title={movieId}
            runningTime={movie.runningTime}
            buyers={movie.buyers}
            IMDb={movie.IMDb}
            image={movie.image}
            price={movie.price}
            showButton={showButton}
            movieBuyer={movieBuyer} />
    }) : <p>No movie was found</p>

    return (
        <ul className='store_div-list'>
            {listOfMovies}
        </ul>
    )
}

export default memo(listOfMovies)