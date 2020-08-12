import React from 'react'

const input = props => {
    const { elementType, elementConfig, value, change, label, touched, invalid } = props

    console.log('touched: ', touched, 'invalid: ', invalid)

    let inputElement = null

    switch (elementType) {
        case ('input'):
            inputElement = <input
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
            inputElement = <select>
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
        <div>
            <label>{label}</label>
            {inputElement}
        </div>
    )
}

export default input