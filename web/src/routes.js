import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Register from './Pages/Register';

export default function Routes(){
    return(
        <BrowserRouter>

            <Switch>

                <Route path="/" component={ Landing } exact />
                <Route path="/login" component={ Login } exact />
                <Route path="/register" component={ Register } exact />

            </Switch>
        
        </BrowserRouter>
    )
}