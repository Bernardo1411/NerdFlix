import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ListOfMovies from '../../components/ListOfMovies/ListOfMovies'
import PurchaseCompleted from '../../components/PurchaseCompleted/PurchaseCompleted'
import { fetchOrder } from '../../store/actions/index'

class Basket extends Component {
    componentDidMount() {
        this.props.fetchOrder(this.props.userId, this.props.idToken)
    }

    render() {
        return (
            <Fragment>
                <h1>Basket</h1>
                <ListOfMovies />
                <Route path={this.props.match.url + '/purchased'} component={PurchaseCompleted} />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        idToken: state.auth.idToken,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrder: (userId, idToken) => dispatch(fetchOrder(userId, idToken))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)