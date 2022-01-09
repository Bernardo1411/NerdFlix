import React from 'react'
import { connect } from 'react-redux'

import UserNav from './UserNav/UserNav';
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'

const navigationItems = props => {
    let navItems = (
        <ul className="nav_list">
            <li><NavigationItem
                exactItem={true}
                link="/">Home</NavigationItem></li>
            <li><NavigationItem link="/login">Sign In</NavigationItem></li>
            <li><NavigationItem link="/signup">Sign Up</NavigationItem></li>
        </ul>
    )
    
    if (props.isAuth) {
        navItems = (
            <ul className="nav_list">
                <li><NavigationItem
                    exactItem={true}
                    link="/">Home</NavigationItem></li>
                <li>
                    <UserNav />
                </li>
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