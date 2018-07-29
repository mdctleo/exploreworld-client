import React, { Component } from 'react';
import testBackground from './testBackground.jpg';
import { Link } from 'react-router-dom'
import Redirect from "react-router-dom/es/Redirect";
import landing from "./landing";
import CustomizedSnackbars from "./snackbar";

import {Card, CardActions, CardContent, CardHeader} from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/es/Typography/Typography";



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
            redirect: false,
            error: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearError = this.clearError.bind(this);
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

            return response.json();
        }.bind(this)).then(function(myJson) {
            console.log(myJson);
            this.setState({error: myJson.payload});
        }.bind(this));
    }

    clearError(){
        this.setState({error: null});
    }

    render() {

        let errorSnackbar;

        if(this.state.error){
            errorSnackbar = <CustomizedSnackbars clearError={this.clearError} variant="error" message={this.state.error}/>
        }

        if(this.state.redirect){
            return <Redirect to="/landing" />;
        }


        return (
             <Grid container spacing={8} justify="center">
                 {errorSnackbar}
                 <Grid item xs={6}>
                        <Card>
                            <form onSubmit={this.handleSubmit}>

                                <CardContent>

                                    <Typography gutterBottom variant="headline" component="h2">
                                        Login
                                    </Typography>

                                    <FormGroup>
                                        <FormControl>
                                            <TextField
                                                required
                                                label='Email'
                                                type="email"
                                                margin="normal"
                                                id="email" name="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                            >

                                            </TextField>
                                        </FormControl>
                                    </FormGroup>

                                    <FormGroup>
                                        <TextField
                                            required
                                            label='Password'
                                            type="password"
                                            margin="normal"
                                            id="password" name="password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                        >
                                        </TextField>
                                    </FormGroup>

                                </CardContent>


                                <CardActions>
                                    <Button type="submit">Login</Button>
                                </CardActions>

                            </form>


                        </Card>
                    </Grid>
                </Grid>

        );
    }
}

export default LoginForm;

