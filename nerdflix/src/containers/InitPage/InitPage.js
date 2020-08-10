import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'

import BestSellers from '../../components/BestSellers/BestSellers'
import Store from '../../components/Store/Store'
import {initMovies} from '../../store/actions/movies'

class InitPage extends Component {
    componentDidMount(){
        this.props.initMovies()
    }

    render() {  
        return (
            <Fragment>
                <h1>INITPAGE</h1>
                <BestSellers />
                <Store />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return{
        movies: state.movies
    }
}

const mapDispatchToProps = dispatch => {
    return{
        initMovies: () => dispatch(initMovies())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(InitPage)