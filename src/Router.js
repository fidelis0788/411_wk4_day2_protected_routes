import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import Login from './components/Login'
import Auth from "./Auth"
const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (<Route {...rest}render={(props) => Auth.checkauth()?
<Component {...rest} {...props}/>:
<Redirect to="login" />} />)}
const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute path="/about" component={About} />
            <ProtectedRoute path="/car/:id" component={Car} />
        </Switch>
    );
};

export default Router;