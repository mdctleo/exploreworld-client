import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//USED TO TEST ROUTING I THINK
class Header extends Component{
    render(){
        return(
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/landing'>GO TO LANDING</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;