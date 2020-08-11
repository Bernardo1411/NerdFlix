import React, { Component } from 'react'

import Input from '../../../components/UI/Input/Input'
import {updateObject} from '../../../shared/utility'

class SignUp extends Component{
    state = {
        formControl:{
            Name:{
                elementType: 'input',
                elementConfig:{
                    type: 'text',
                    placeholder: 'name'
                },
                value: '',
                label: 'Name'
            },
            email:{
                elementType: 'input',
                elementConfig:{
                    type: 'email',
                    placeholder: 'e-mail'
                },
                value: '',
                label: 'E-mail'
            },
            password:{
                elementType: 'input',
                elementConfig:{
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                label: 'Password'
            },
            location:{
                elementType: 'select',
                elementConfig:{
                    type: 'select',
                    option:['Brazil', 'EUA', 'Europe'],
                },
                value: 'Brazil',
                label: 'Location'
            }
        }
    }

    inputValueHandler = (event, inputName) => {
        const newFormControl = updateObject(this.state.formControl, {
            [inputName]: updateObject(this.state.formControl[inputName], {value: event.target.value})
    })

        this.setState({formControl: newFormControl})
    }

    render(){

        const inputTypeArray = []
        for(let key in this.state.formControl){
            inputTypeArray.push({
                key,
                properties: this.state.formControl[key]
            })
        }

        const form = inputTypeArray.map( inputType => {
            return (
            <Input 
            key={inputType.key}
            elementType={inputType.properties.elementType}
            elementConfig={inputType.properties.elementConfig}
            label={inputType.properties.label}
            value={inputType.properties.value}
            change={event => this.inputValueHandler(event, inputType.key)}
            />
            )
        })

        return(
            <div>
                <h1>SignUp</h1>
                {form}
            </div>
        )
    }
}

export default SignUp