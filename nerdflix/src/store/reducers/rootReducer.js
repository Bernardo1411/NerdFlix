import {combineReducers} from 'redux'

import moviesReducer from './movies'
import authReducer from './auth'

const rootReducer = combineReducers({
    movies: moviesReducer,
    auth: authReducer
})

export default rootReducer