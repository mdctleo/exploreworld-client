import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PageRouter from './main'
import Header from './header'
import logo from './logo.svg';
import './App.css';
import { withCookies, Cookies } from 'react-cookie';

class App extends Component {
    render(){
        return (
            <div className="h-100">
                <Header />
                <PageRouter />
            </div>
        );
    }
}

export default App;
