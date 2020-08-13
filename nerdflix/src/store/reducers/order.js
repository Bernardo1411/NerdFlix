import * as actionType from '../actions/actionTypes'
import {updateObject} from '../../shared/utility'

const initState = {
    movieData: [],
    error: null,
    isLoaded: true,
}

const orderReducer = (state = initState, action) => {
    switch(action.type){
        case actionType.ORDER_START:
            return updateObject(state, {isOrderDone: false})
        case actionType.ORDER_SUCCESS:
            return updateObject(state, {movieData: state.movieData.concat(action.movieData), isLoaded: true})
        case actionType.ORDER_FAILED:
            return updateObject(state, {error: action.error, isLoaded: true})
        default:
            return state
    }
}

export default orderReducer