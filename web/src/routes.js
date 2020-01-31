import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import New from './pages/new';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/new" component={New} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}