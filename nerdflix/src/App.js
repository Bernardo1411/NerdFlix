import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import InitPage from './containers/InitPage/InitPage'
import Basket from './containers/Basket/Basket'
import Login from './containers/Auth/Login/Login'
import SignUp from './containers/Auth/SignUp/SignUp'
import Logout from './containers/Auth/Logout/Logout'
import {authCheckValidity} from './store/actions/index'
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.authCheckValidity()
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/basket' component={Basket} />
          <Route path='/login' exact component={Login} />
          <Route path='/logout' exact component={Logout} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/' exact component={InitPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    isAuth: state.auth.token
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authCheckValidity: () => dispatch(authCheckValidity())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);