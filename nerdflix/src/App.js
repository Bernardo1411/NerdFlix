import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'

import InitPage from './containers/InitPage/InitPage'
import Basket from './containers/Basket/Basket'
import Login from './containers/Auth/Login/Login'
import SignUp from './containers/Auth/SignUp/SignUp'
import Logout from './containers/Auth/Logout/Logout'
import './App.css';

class App extends Component {

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

export default App;