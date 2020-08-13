import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import BestSellers from '../../components/BestSellers/BestSellers'
import Store from '../../components/Store/Store'
import { initMovies, order } from '../../store/actions/index'
import Spinner from '../../components/UI/Spinner/Spinner'

class InitPage extends Component {
    componentDidMount() {
        this.props.initMovies()
    }

    buyMovieHandler = (movie) => {
        const token = localStorage.getItem('token')
        this.props.order(movie, token)
    }

    render() {
        const movies = this.props.movies

        const store = this.props.isLoaded ?
            <Fragment>
                <BestSellers
                    movies={movies}
                    isForSale={false} />
                <Store
                    movies={movies}
                    showButton={true}
                    movieBuyer={this.buyMovieHandler.bind(this)} />
            </Fragment> : <Spinner />

        return (
            <Fragment>
                <h1>INITPAGE</h1>
                {store}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        isLoaded: state.movies.isLoaded
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initMovies: () => dispatch(initMovies()),
        order: (movieData, token) => dispatch(order(movieData, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InitPage)