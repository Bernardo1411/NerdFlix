import React from 'react'

const input = props => {
    const { elementType, elementConfig, value, change, label } = props
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
        <form>
            <label>{label}</label>
            {inputElement}
        </form>
    )
}

export default input