import React from 'react'

import classes from './Input.module.css'

const input = props => {
    const { elementType, elementConfig, value, change, label, touched, invalid } = props

    let validationStyle = [classes.Input]
    let inputElement = null

    if(invalid && touched){
        validationStyle.push(classes.Invalid)
    }

    switch (elementType) {
        case ('input'):
            inputElement = <input className={validationStyle.join(' ')}
                {...elementConfig}
                value={value}
                onChange={change}
            />
            break
        case ('textarea'):
            inputElement = <input
                {...elementConfig}
                value={value}
                onChange={change}
            />
            break
        case ('select'):
            inputElement = <select className={classes.Select}>
                {
                    elementConfig.option.map(option => {
                        return (<option
                            key={option}
                            value={option}>{option}</option>
                        )
                    })
                }
            </select>
            break
        default:
            inputElement = <input
                {...elementConfig}
                value={value}
                onChange={change}
            />
    }

    return (
        <div className={classes.Form}>
            <label>{label}</label>
            {inputElement}
        </div>
    )
}

export default input