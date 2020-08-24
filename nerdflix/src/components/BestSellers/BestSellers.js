import React from 'react'

import ListOfMovies from '../ListOfMovies/ListOfMovies'
import { updateObject } from '../../shared/utility'
import './BestSellers.css'

const bestSellers = props => {
    const { movies, error } = props.movies
    const { showButton } = props

    let newObjectMovies = {}
    Object.keys(movies).forEach(movieId => {
        if (movies[movieId].buyers >= 30) {
            newObjectMovies = updateObject(newObjectMovies, { [movieId]: movies[movieId] })
        }
    }
    )

    const listOfMovies = !error ?
        <ListOfMovies
            movies={newObjectMovies}
            showButton={showButton} /> : <p>{error}</p>

    return (
        <div className='main_div-bestSeller'>
            <h2>Bestsellers</h2>
            {listOfMovies}
        </div>
    )
}

export default bestSellers