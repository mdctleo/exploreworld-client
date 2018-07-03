import React, { Component } from 'react';
import testBackground from './testBackground.jpg';
import './App.css';

var bgImg= {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: "url(" + testBackground + ")"
};

class landing extends Component{
    constructor(props){
        super(props);
        this.state={
           fingerprint: props.fingerprint
        };
    }

    render(){
        return(
                <div className="col-10 picture-container-height mx-auto my-auto">
                    <img src={testBackground} className="img-fluid picture-resize"/>
                </div>
        );
    }
}

export default landing;