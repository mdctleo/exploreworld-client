import React, { Component } from 'react';
import testBackground from './testBackground.jpg';
import { Link } from 'react-router-dom'
import Redirect from "react-router-dom/es/Redirect";
import landing from "./landing";

var bgImg= {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: "url(" + testBackground + ")"
};


class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            redirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('/users/login',{
            body: JSON.stringify({
                email: this.state.email,
                password : this.state.password,
            }),
            headers:{
                "Content-Type": "application/json",
            },
            method: 'POST',

        }).then(function(response) {
            if (response.status === 200){
                this.setState({redirect: true});
            }
        }.bind(this));
    }
    render() {

        if(this.state.redirect){
            return <Redirect to="/landing" />;
        }
        return (
            <div className="h-100 mx-auto my-auto" style={bgImg}>
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-12 col-md-6 mx-auto my-auto">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-group row">
                                            <h1> Login </h1>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-12">
                                                email:
                                                <input type="email" className="form-control form-control-lg" id="email" name="email"
                                                       value={this.state.email}
                                                       onChange={this.handleChange}/>
                                            </label>
                                        </div>

                                        <div className="form-group row">
                                            <label className="col-12">
                                                password:
                                                <input type="password" className="form-control form-control-lg" id="password"
                                                       name="password"
                                                       value={this.state.password}
                                                       onChange={this.handleChange}/>
                                            </label>
                                        </div>
                                        <input type="submit" className="btn btn-danger col-" value="login"/>
                                        <Link to='/'>don't have an account? login</Link>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        );
    }
}

export default LoginForm;

