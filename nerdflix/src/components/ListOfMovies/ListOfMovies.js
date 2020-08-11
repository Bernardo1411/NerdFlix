import React, {memo} from 'react'

import Card from './Card/Card'

const listOfMovies = props => {
    const {movies} = props

    const isFullObject = movies => {
        return (!!movies) && Object.getPrototypeOf(movies) === Object.prototype && Object.keys(movies).length !== 0
    }

    const listOfMovies = isFullObject(movies) ? Object.keys(movies).map( movieId => {
        const movie = movies[movieId]

        return <Card key={movieId}
                     title={movieId} 
                     runningTime={movie.runningTime}
                     buyers={movie.buyers}
                     IMDb={movie.IMDb} />
    }) : <p>No movie was found</p>

    return (
        <div>
            <h3>listOfMovies</h3>
            {listOfMovies}
        </div>
    )
}

export default memo(listOfMovies)