import React, { useReducer, useEffect, Fragment } from 'react'

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
        <Fragment>
            <h1>Purchase Completed!</h1>
            <p>You will be redirected in {state.time} minutes</p>
        </Fragment>
    )
}

export default PurchaseCompleted