import React, { Fragment } from 'react'

import ListOfMovies from '../ListOfMovies/ListOfMovies'

const store = props => {
    const { movies, error } = props.movies

    const listOfMovies = !error ? <ListOfMovies movies={movies} /> : <p>{error}</p>

    return (
        <Fragment>
            <h2>Store</h2>
            {listOfMovies}
        </Fragment>
    )
}

export default store