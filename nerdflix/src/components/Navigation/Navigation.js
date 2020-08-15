import React from 'react'

import NavigationItems from './NavigationItems/NavigationItems'
import Logo  from '../UI/Logo/Logo'

const navigation = props => {
    return(
        <div>
            <h1>Navigation</h1>
            <Logo />
            <NavigationItems />
        </div>
    )
}

export default navigation