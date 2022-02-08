import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from './Login';
import Header from './Header';
import Catalog from './Catalog';
import MovieInfo from './MovieInfo';
import MyList from './MyList';

function Routes() {
    return (
        <BrowserRouter>
            {localStorage.getItem('token') ?
                !window.location.pathname.startsWith('/app') ?
                    <React.Fragment>
                        <Header />
                        <Redirect to="/app/catalogo" />
                    </React.Fragment>
                    :
                    <Header />
                :
                <Redirect to="/login" />
            }
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/app/catalogo">
                    <Catalog />
                </Route>
                <Route path="/app/filme/:id">
                    <MovieInfo />
                </Route>
                <Route path="/app/lista">
                    <MyList />
                </Route>
                <Route path="/">
                    <Redirect to="/app/catalogo" />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;