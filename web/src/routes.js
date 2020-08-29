import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './Pages/Landing';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';

export default function Routes(){
    return(
        <BrowserRouter>

            <Switch>

                <Route path="/" component={ Landing } exact />
                <Route path="/login" component={ Login } />
                <Route path="/register" component={ Register } />
                <Route path="/home/:id" component={ Home } />

            </Switch>
        
        </BrowserRouter>
    )
}