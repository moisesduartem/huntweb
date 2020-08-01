import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    /**
     * BrowserRouter => define que vamos utilizar as rotas através de um browser.
     * Switch => define que apenas UMA rota será utilizada por vez. 
     */
    <BrowserRouter>
        
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;