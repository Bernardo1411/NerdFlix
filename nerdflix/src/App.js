import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import InitPage from './containers/InitPage/InitPage'
import Logout from './containers/Auth/Logout/Logout'
import { authCheckValidity } from './store/actions/index'
import Layout from './hoc/Layout/Layout'
import asyncComponent from './hoc/asyncComponent/asyncComponent'
import './App.css';

const asyncBasket = asyncComponent(() => {
  return import('./containers/Basket/Basket')
})

const asyncLogin = asyncComponent(() => {
  return import('./containers/Auth/Login/Login')
})

const asyncSignup = asyncComponent(() => {
  return import('./containers/Auth/SignUp/SignUp')
})

class App extends Component {
  componentDidMount() {
    this.props.authCheckValidity()
  }

  render() {
    let renderedComponents =
      <Switch>
        <Route path='/login' component={asyncLogin} />
        <Route path='/signup' component={asyncSignup} />
        <Route path='/' exact component={InitPage} />
        <Redirect to='/' />
      </Switch>

    if (this.props.isAuth || localStorage.getItem('token')) {
      renderedComponents =
        <Switch>
          <Route path='/logout' component={Logout} />
          <Route path='/basket' component={asyncBasket} />
          <Route path='/' exact component={InitPage} />
          <Redirect to='/' />
        </Switch>
    }

    return (
      <div className="App">
        <Layout>
          {renderedComponents}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.idToken !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authCheckValidity: () => dispatch(authCheckValidity())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);