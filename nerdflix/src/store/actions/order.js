import axios from '../../axios'

import * as actionType from './actionTypes'

export const orderStart = () => {
    return {
        type: actionType.ORDER_START
    }
}

export const orderSuccess = (movieData) => {
    return{
        type: actionType.ORDER_SUCCESS,
        movieData
    }
}

export const orderFailed = (error) => {
    return{
        type: actionType.ORDER_FAILED,
        error
    }
}

export const order = (movie, token) => {
    const movieData = {
        runningTime: movie.runningTime,
        IMDb: movie.IMDb,
        title: movie.title
    }

    return dispatch => {
        dispatch(orderStart())
        axios.post('/order.json?auth=' + token, movieData)
        .then(res => {
            dispatch(orderSuccess(movieData))
        })
        .catch(error => {
            dispatch(orderFailed(error))
        })
    }
}