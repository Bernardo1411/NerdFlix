import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import InitPage from './containers/InitPage/InitPage';
import Logout from './containers/Auth/Logout/Logout';
import { authCheckValidity } from './store/actions/index';
import Spinner from './components/UI/Spinner/Spinner';
import Layout from './hoc/Layout/Layout';
import './App.css';

const asyncBasket = React.lazy(() => import('./containers/Basket/Basket'));

const asyncLogin = React.lazy(() => import('./containers/Auth/Login/Login'));

const asyncSignup = React.lazy(() =>import('./containers/Auth/SignUp/SignUp'));

class App extends Component {
  componentDidMount() {
    this.props.authCheckValidity()
  }

  render() {
    let renderedComponents =
      <Suspense fallback={<Spinner isFullPage />}>
        <Switch>
          <Route path='/login' component={asyncLogin} />
          <Route path='/signup' component={asyncSignup} />
          <Route path='/' exact component={InitPage} />
          <Redirect to='/' />
        </Switch>
      </Suspense>

    if (this.props.isAuth || localStorage.getItem('token')) {
      renderedComponents =
        <Suspense fallback={<Spinner isFullPage />}>
          <Switch>
            <Route path='/logout' component={Logout} />
            <Route path='/basket' component={asyncBasket} />
            <Route path='/' exact component={InitPage} />
            <Redirect to='/' />
          </Switch>
        </Suspense>
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