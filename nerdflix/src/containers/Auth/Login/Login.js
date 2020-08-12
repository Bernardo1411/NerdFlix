import React, { Component } from 'react'
import { connect } from 'react-redux'

import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import { updateObject, checkValidity } from '../../../shared/utility'
import * as actionType from '../../../store/actions/index'
import Spinner from '../../../components/UI/Spinner/Spinner'

class Login extends Component {

    state = {
        formControl: {
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
            [inputName]: updateObject(this.state.formControl[inputName], { value: event.target.value,
              valid: checkValidity(event.target.value, this.state.formControl[inputName].validation),
              touched: true
            })
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
                <h1>Login</h1>
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
    return {
        auth: (email, password) => dispatch(actionType.auth(email, password, false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)