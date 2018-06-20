import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PageRouter from './main';
import Header from './header';
import './App.css';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class App extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        const { cookies } = props;

        this.state = {
            name: cookies.get('name') || 'Ben'
        };
    }

    render(){
        console.log(this.state.name);
        return (
            <div className="h-100">
                <Header />
                <PageRouter />
            </div>
        );
    }
}

export default withCookies(App);
