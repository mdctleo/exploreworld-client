import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import RegisterForm from './register'
import LoginForm from './login'
import Landing from './landing'

class PageRouter extends Component{
    render(){
        return(
        <main className= "h-100">
            <Switch>
                <Route exact path='/' component={RegisterForm}/>
                <Route path='/login' component={LoginForm}/>
                <Route path='/landing' component={Landing}/>
            </Switch>
        </main>
        );
    }

}

export default PageRouter;