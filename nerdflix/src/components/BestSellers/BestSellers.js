import React, { Fragment } from 'react'

import ListOfMovies from '../ListOfMovies/ListOfMovies'
import { updateObject } from '../../shared/utility'

const bestSellers = props => {
    const { movies, error } = props.movies
    
    let newObjectMovies = {}
    Object.keys(movies).forEach(movieId => {
        if (movies[movieId].buyers >= 30) {
            newObjectMovies = updateObject(newObjectMovies, { [movieId]: movies[movieId] })
        }
    }
    )

    const listOfMovies = !error ? <ListOfMovies movies={newObjectMovies} /> : <p>{error}</p>

    return (
        <Fragment>
            <h2>bestSellers</h2>
            {listOfMovies}
        </Fragment>
    )
}

export default bestSellers