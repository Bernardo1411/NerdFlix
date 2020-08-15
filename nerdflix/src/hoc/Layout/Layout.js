import React, { Component, Fragment } from 'react'

import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'

class Layout extends Component{

    render(){
        return(
            <Fragment>
                <Navigation />
                {this.props.children}
                <Footer />
            </Fragment>
        )
    }
}

export default Layout