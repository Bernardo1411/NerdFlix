import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import BestSellers from '../../components/BestSellers/BestSellers'
import Store from '../../components/Store/Store'
import Carousel from '../../components/UI/Carousel/Carousel'
import { initMovies, order } from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'
import Modal from '../../components/UI/Modal/Modal'
import './InitPage.css'

class InitPage extends Component {
    state = {
        displayModal: false
    }

    componentDidMount() {
        this.props.initMovies()
    }

    showModal = (showModal) => {
        this.setState({displayModal: showModal})
    }

    buyMovieHandler = (movie) => {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        this.props.order(movie, userId, token)
        this.showModal(true)
    }

    render() {
        const movies = this.props.movies;
        const { isAuth } = this.props;

        const store = this.props.isLoaded ?
            <Fragment>
                <Modal display={this.state.displayModal} clicked={this.showModal.bind(this)} isAlert={true} message={isAuth ? 'Added to your cart!' : 'You are not logged in.'}>
                    <Carousel />
                    <BestSellers
                        movies={movies}
                        isForSale={false} /> 
                    <Store
                        movies={movies}
                        showButton={'Buy Now'}
                        movieBuyer={this.buyMovieHandler.bind(this)} />
                </Modal>
            </Fragment> : <Spinner isFullPage />

        return (
            <div className="main-page">
                {store}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        isLoaded: state.movies.isLoaded,
        isAuth: state.auth.idToken !== null,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initMovies: () => dispatch(initMovies()),
        order: (movieData, userId, token) => dispatch(order(movieData, userId, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InitPage)