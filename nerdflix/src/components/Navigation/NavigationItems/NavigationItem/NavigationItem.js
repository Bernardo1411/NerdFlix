import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavigationItem.css'

const navigationItem = props => {
    return(
    <NavLink 
    to={props.link}
    exact={props.exactItem}
    className="list-item_link">{props.children}</ NavLink>
    )
}

export default navigationItem