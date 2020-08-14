import React from 'react'

import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = props => {
    return(
        <ul>
            <li><NavigationItem link="/">Home</NavigationItem></li>
            <li><NavigationItem link="/basket">Basket</NavigationItem></li>
            <li><NavigationItem link="/login">Login</NavigationItem></li>
            <li><NavigationItem link="/signup">Signup</NavigationItem></li>
        </ul>
    )
}

export default navigationItems