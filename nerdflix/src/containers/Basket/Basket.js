import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import {connect} from 'react-redux'

import ListOfMovies from '../../components/ListOfMovies/ListOfMovies'
import PurchaseCompleted from '../../components/PurchaseCompleted/PurchaseCompleted'

class Basket extends Component {
    componentDidMount(){
        
    }

    render() {
        return (
            <Fragment>
                <h1>Basket</h1>
                <ListOfMovies />
                <Route path={this.props.match.url + '/purchased'} component={PurchaseCompleted}/>
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        
    }
}

export default connect(null, mapDispatchToProps)(Basket)