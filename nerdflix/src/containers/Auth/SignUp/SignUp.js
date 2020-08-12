import React, { Component } from 'react'
import {connect} from 'react-redux'

import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import { updateObject } from '../../../shared/utility'
import * as actionType from '../../../store/actions/index'
import Spinner from '../../../components/UI/Spinner/Spinner'

class SignUp extends Component {
    state = {
        formControl: {
            Name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'name'
                },
                value: '',
                label: 'Name'
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'e-mail'
                },
                value: '',
                label: 'E-mail',
                validation: {
                    isEmail: true,
                    isRequired: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                label: 'Password',
                validation: {
                    minLength: 6,
                    isRequired: true
                },
                valid: false,
                touched: false
            },
            location: {
                elementType: 'select',
                elementConfig: {
                    type: 'select',
                    option: ['Brazil', 'EUA', 'Europe'],
                },
                value: 'Brazil',
                label: 'Location'
            }
        }
    }

    componentDidUpdate(){
        if(this.props.isAuthenticated){
            this.props.history.replace('/')
        }
    }

    inputValueHandler = (event, inputName) => {
        const newFormControl = updateObject(this.state.formControl, {
            [inputName]: updateObject(this.state.formControl[inputName], { value: event.target.value })
        })

        this.setState({ formControl: newFormControl })
    }

    submitAuthHandler = (event) => {
        event.preventDefault()
        this.props.auth(this.state.formControl.email.value, this.state.formControl.password.value)
    }

    render() {

        const inputTypeArray = []
        for (let key in this.state.formControl) {
            inputTypeArray.push({
                key,
                properties: this.state.formControl[key]
            })
        }

        let form = inputTypeArray.map(inputType => {
            return (
                <Input
                    key={inputType.key}
                    elementType={inputType.properties.elementType}
                    elementConfig={inputType.properties.elementConfig}
                    label={inputType.properties.label}
                    invalid={!inputType.properties.valid}
                    touched={inputType.properties.touched}
                    value={inputType.properties.value}
                    change={event => this.inputValueHandler(event, inputType.key)}
                />
            )
        })

        if (this.props.isLoading) {
            form = <Spinner />
        }

        return (
            <div>
                <h1>SignUp</h1>
                <form onSubmit={this.submitAuthHandler}>
                    {form}
                    <Button>SUBMIT</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return{
        auth: (email, password) => dispatch(actionType.auth(email, password, true))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)