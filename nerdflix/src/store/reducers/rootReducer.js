import {combineReducers} from 'redux'

import moviesReducer from './movies'
import authReducer from './auth'
import orderReducer from './order'

const rootReducer = combineReducers({
    movies: moviesReducer,
    auth: authReducer,
    order: orderReducer
})

export default rootReducer