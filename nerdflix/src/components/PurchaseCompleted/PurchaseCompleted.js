import React, { useReducer, useEffect } from 'react'

import './PurchaseCompleted.css'

const initialState = {
    time: 3
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return { time: state.time + 1 }
        case DECREMENT:
            return { time: state.time - 1 }
        default:
            return state
    }
}

const PurchaseCompleted = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch({ type: DECREMENT })
        }, 1000)

        setTimeout(() => {
            clearInterval(timer)
            props.history.replace('/')
        }, 3000)
    }, [props.history])

    return (
        <div className='basket_div-purchase'>
            <h3>Purchase Completed!</h3>
            <p>You will be redirected in {state.time} seconds</p>
        </div>
    )
}

export default PurchaseCompleted