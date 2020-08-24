import React from 'react'
import { connect } from 'react-redux'

import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'

const navigationItems = props => {
    let navItems = (
        <ul className="nav_list">
            <li><NavigationItem
                exactItem={true}
                link="/">Home</NavigationItem></li>
            <li><NavigationItem link="/login">Login</NavigationItem></li>
            <li><NavigationItem link="/signup">Signup</NavigationItem></li>
        </ul>
    )
    
    if (props.isAuth) {
        navItems = (
            <ul className="nav_list">
                <li><NavigationItem
                    exactItem={true}
                    link="/">Home</NavigationItem></li>
                <li><NavigationItem link="/basket">Basket</NavigationItem></li>
                <li><NavigationItem link="/logout">Logout</NavigationItem></li>
            </ul>
        )
    }

    return navItems
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.idToken !== null
    }
}

export default connect(mapStateToProps)(navigationItems)