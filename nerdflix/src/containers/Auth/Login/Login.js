import React, { Component } from 'react'
import { connect } from 'react-redux'

import Input from '../../../components/UI/Input/Input'
import Button from '../../../components/UI/Button/Button'
import { updateObject, checkValidity } from '../../../shared/utility'
import * as actionType from '../../../store/actions/index'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './Login.module.css'

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
            <div className={classes.Login}>
                <form
                className={classes.Form}
                onSubmit={this.submitAuthHandler}>
                    {form}
                    <Button 
                    disabled={!(this.state.formControl.email.valid && this.state.formControl.password.valid)}>SUBMIT</Button>
                    <p className={classes.errorMessage}>{this.props.error}</p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
        isAuthenticated: state.auth.isAuthenticated,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        auth: (email, password) => dispatch(actionType.auth(email, password, false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)