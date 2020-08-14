import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ListOfMovies from '../../components/ListOfMovies/ListOfMovies'
import PurchaseCompleted from '../../components/PurchaseCompleted/PurchaseCompleted'
import Button from '../../components/UI/Button/Button'
import { fetchOrder } from '../../store/actions/index'

class Basket extends Component {
    state = {
        isOrderCompleted: false
    }

    componentDidMount() {
        this.props.fetchOrder(this.props.userId, this.props.idToken)
    }

    completeOrder = () => {
        this.setState({isOrderCompleted: true})
    }

    render() {
        let basketContent = 
        <Fragment>
            <ListOfMovies 
                movies={this.props.orderedMovies}/>
                <Button clicked={this.completeOrder}>Complete Order</ Button>
        </Fragment>

        if(this.state.isOrderCompleted){
            basketContent = <Route path={this.props.match.url + '/purchased'} component={PurchaseCompleted} />
        }

        return (
            <Fragment>
                <h1>Basket</h1>
                {basketContent}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.order.movieData)
    return {
        idToken: state.auth.idToken,
        userId: state.auth.userId,
        orderedMovies: state.order.movieData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrder: (userId, idToken) => dispatch(fetchOrder(userId, idToken))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)