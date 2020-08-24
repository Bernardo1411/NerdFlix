import React, { Component, Fragment } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import ListOfMovies from '../../components/ListOfMovies/ListOfMovies'
import PurchaseCompleted from '../../components/PurchaseCompleted/PurchaseCompleted'
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'
import Modal from '../../components/UI/Modal/Modal'
import { fetchOrder, removeOrder } from '../../store/actions/index'
import './Basket.css'

class Basket extends Component {
    state = {
        isOrderCompleted: false,
        openModal: false,
        didConfirm: false
    }

    componentDidMount() {
        this.props.fetchOrder(this.props.userId, this.props.idToken)
    }

    completeOrder = () => {
        this.setState({ isOrderCompleted: true, openModal: true })
    }

    confirmationHandler = (isConfirm) => {
        this.setState({ didConfirm: isConfirm, openModal: false })
    }

    removeItem = (orderId) => {
        this.props.removeOrder(this.props.userId, orderId.title, this.props.idToken)
    }

    render() {
        let basketContent =
            <Fragment>
                <ListOfMovies
                    showButton={'Remove'}
                    movieBuyer={this.removeItem.bind(this)}
                    movies={this.props.orderedMovies} />
                <NavLink to={this.props.match.url + '/purchased'}>
                    <Button clicked={this.completeOrder}>Complete Order</ Button>
                </NavLink>
            </Fragment>

        if (this.state.isOrderCompleted && this.state.didConfirm) {
            basketContent = <Route path={this.props.match.url + '/purchased'} component={PurchaseCompleted} />
        }

        if (!this.props.isLoaded) {
            basketContent = <Spinner />
        }

        return (
            <div className="main_div-basket">
                <Modal display={this.state.openModal} clicked={this.confirmationHandler.bind(this)}>
                    <h2>Basket</h2>
                    {basketContent}
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        idToken: state.auth.idToken,
        userId: state.auth.userId,
        orderedMovies: state.order.movieData,
        isLoaded: state.order.isLoaded
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrder: (userId, idToken) => dispatch(fetchOrder(userId, idToken)),
        removeOrder: (userId, orderId, idToken) => dispatch(removeOrder(userId, orderId, idToken))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)