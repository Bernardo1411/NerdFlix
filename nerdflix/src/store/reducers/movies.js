import * as actionType from '../actions/actionTypes'
import {updateObject} from '../../shared/utility'

const initState = {
    movies:{},
    error: null,
    isLoaded: false
}

const initMovies = (state, movies) => {
    return updateObject(state, {movies: movies, isLoaded: true})
}

const moviesReducer = (state = initState, action) => {
    switch(action.type){
        case actionType.INIT_MOVIES:
            return initMovies(state, action.payload)
        case actionType.INIT_MOVIES_FAILED:
            return updateObject(state, {error: 'Can not reach the server', isLoaded: true})
        default:
            return state
    }
}

export default moviesReducer