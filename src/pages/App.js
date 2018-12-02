import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../components/templates/home/Home';
import Login from '../components/templates/user/login';
import Register from '../components/templates/user/register';
import ActiveUser from '../components/templates/user/active-user';
import NewSearch from './NewSearch';


class App extends Component {
    render() {
        return (
            <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <PrivateRoute exact path='/activate' component={ActiveUser} />
                <PrivateRoute exact path='/search' component={NewSearch} />
                <Redirect from="/" to="/" />
            </Switch>
        );
    }
}

export default App;