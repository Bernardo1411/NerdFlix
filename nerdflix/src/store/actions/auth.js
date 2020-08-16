import axios from '../../axios'

import * as actionType from './actionTypes'

export const authStart = () => {
    return {
        type: actionType.AUTH_START
    }
}

export const authSuccess = (userId, idToken) => {
    return {
        type: actionType.AUTH_SUCCESS,
        userId,
        idToken,
    }
}

export const authFailed = error => {
    return {
        type: actionType.AUTH_FAILED,
        error
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    return{
        type: actionType.AUTH_LOGOUT
    }
}

export const checkExpirationTime = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime*1000)
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email,
            password,
            returnSecureToken: true
        }

        const url = !isSignup ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAk9msMoDGvtcUn7SdKU47BYjouQnWXd8w" : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAk9msMoDGvtcUn7SdKU47BYjouQnWXd8w"

        axios.post(url, authData)
            .then(res => {
                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000)
                localStorage.setItem('expirationDate', expirationDate)
                localStorage.setItem('token', res.data.idToken)
                localStorage.setItem('userId', res.data.localId)
                dispatch(checkExpirationTime(res.data.expiresIn))
                return dispatch(authSuccess(res.data.localId, res.data.idToken))
            })
            .catch(error => {
                return dispatch(authFailed('e-mail or password incorrect'))
            })
    }
}

export const authCheckValidity = () => {
    return dispatch => {
        const idToken = localStorage.getItem('token')
        if(!idToken){
            dispatch(logout())
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'))
            if(expirationDate <= new Date()){
                dispatch(logout())
            }else{
                const userId = localStorage.getItem('userId')
                dispatch(authSuccess(userId, idToken))
                dispatch(checkExpirationTime((expirationDate.getTime() - new Date().getTime())/1000))
            }
        }
    }
}