import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import BestSellers from '../../components/BestSellers/BestSellers'
import Store from '../../components/Store/Store'
import { initMovies } from '../../store/actions/movies'
import Spinner from '../../components/UI/Spinner/Spinner'

class InitPage extends Component {
    componentDidMount() {
        this.props.initMovies()
    }

    render() {
        const movies = this.props.movies

        const store = this.props.isLoaded ?
            <Fragment>
                <BestSellers movies={movies} />
                <Store movies={movies} />
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
        initMovies: () => dispatch(initMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InitPage)