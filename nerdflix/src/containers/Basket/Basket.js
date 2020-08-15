import React, { Component, Fragment } from 'react'
import { Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import ListOfMovies from '../../components/ListOfMovies/ListOfMovies'
import PurchaseCompleted from '../../components/PurchaseCompleted/PurchaseCompleted'
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/Spinner'
import Modal from '../../components/UI/Modal/Modal'
import { fetchOrder } from '../../store/actions/index'

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
        this.setState({didConfirm: isConfirm, openModal: false})
    }

    render() {
        let basketContent =
            <Fragment>
                <ListOfMovies
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
            <Fragment>
                <Modal display={this.state.openModal} clicked={this.confirmationHandler.bind(this)}>
                    <h1>Basket</h1>
                    {basketContent}
                </Modal>
            </Fragment>
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
        fetchOrder: (userId, idToken) => dispatch(fetchOrder(userId, idToken))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)