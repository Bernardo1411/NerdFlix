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

export const order = (movie, userId, token) => {
    const movieData = {
        runningTime: movie.runningTime,
        IMDb: movie.IMDb,
        title: movie.title,
        userId: userId
    }

    return dispatch => {
        dispatch(orderStart())
        axios.post(`/user/${userId}/order.json?auth=` + token, movieData)
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
        axios.get(`/user/${userId}/order.json?auth=` + idToken )
        .then(res => {
            dispatch(fetchOrderSuccess(res.data))
        })
        .catch(error => {
            dispatch(fetchOrderFailed(error))
        })
    }
}