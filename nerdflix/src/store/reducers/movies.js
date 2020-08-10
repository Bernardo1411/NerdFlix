import * as actionType from '../actions/actionTypes'
import {updateObject} from '../../shared/utility'

const initState = {
    movies:{},
    error: null
}

const initMovies = (state, movies) => {
    return updateObject(state, {movies: movies})
}

const moviesReducer = (state = initState, action) => {
    switch(action.type){
        case actionType.INIT_MOVIES:
            return initMovies(state, action.payload)
        case actionType.INIT_MOVIES_FAILED:
            return updateObject(state, {error: 'Can not reach the server'})
        default:
            return state
    }
}

export default moviesReducer