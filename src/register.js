import React, { Component } from 'react';
import testBackground from './testBackground.jpg';
import { Link } from 'react-router-dom'
import './App.css';

var bgImg= {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: "url(" + testBackground + ")"
};


class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            username: '',
            password: ''
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
        fetch('/users/createusers',{
            body: JSON.stringify({
                email : this.state.email,
                username : this.state.username,
                password : this.state.password,
            }),
            headers:{
                "Content-Type": "application/json",
            },
            method: 'POST',

        }).then(function(response) {
          return response.json();
        })
            .then(function(response) {
                if(response.err == null){
                    
                }else{
                    //display error to user
                }
            }.bind(this));
    }
    render() {
        return (
            <div className="h-100 mx-auto my-auto" style={bgImg}>
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-12 col-md-6 mx-auto my-auto">
                        <div className="card">
                            <div className="card-body">
                                <form className="tabfade" onSubmit={this.handleSubmit}>
                                    <div className="form-group row">
                                        <h1> Register </h1>
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
                                            username:
                                            <input type="text" className="form-control form-control-lg" id="username" name="username"
                                                   value={this.state.username}
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
                                    <input type="submit" className="btn btn-danger" value="register"/>
                                    <Link to='/login'>already have an account? login</Link>
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

export default RegisterForm;