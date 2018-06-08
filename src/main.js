import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import RegisterForm from './register'
import LoginForm from './login'
import Landing from './landing'

class PageRouter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            passedVariable: null
        };

        this.variablePasser = this.variablePasser.bind(this);
    }

    variablePasser(variable){
        this.setState({passedVariable: variable});

    }
    render(){
        return(
        <main className= "h-100">
            <Switch>
                <Route exact path='/' component={RegisterForm} render={(props) => <RegisterForm variablePasser={this.variablePasser}/>}/>
                <Route path='/login' component={LoginForm}/>
                <Route path='/landing' component={Landing}/>
            </Switch>
        </main>
        );
    }

}

export default PageRouter;