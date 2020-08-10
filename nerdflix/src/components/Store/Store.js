import React, {Fragment} from 'react'

import ListOfMovies from '../ListOfMovies/ListOfMovies'

const store = () => {
    return (
        <Fragment>
            <h2>Store</h2>
            <ListOfMovies />
        </Fragment>
    )
}

export default store