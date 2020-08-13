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

export const fetchOrderStart = (moviesOrders) => {
    return {
        type: actionType.FETCH_ORDER_START
    }
}

export const fetchOrderSuccess = (moviesOrders) => {
    return {
        type: actionType.FETCH_ORDER_SUCCESS,
        moviesOrders
    }
}

export const fetchOrderFailed = (error) => {
    return {
        type: actionType.FETCH_ORDER_FAILED,
        error
    }
}

export const fetchOrder = (userId, idToken) => {
    return dispatch => {
        dispatch(fetchOrderStart())
        axios.get('/order.json?auth=' + idToken + '&orderBy="userId"&equalTo="' + userId + '"')
        .then(res => {
            let moviesOrders = []
            for(let key in res.data){
                moviesOrders.push({
                    ...res.data[key],
                    id: key
                })
            }

            dispatch(fetchOrderSuccess(moviesOrders))
        })
        .catch(error => {
            dispatch(fetchOrderFailed(error))
        })
    }
}