import React, { Component } from 'react';
import testBackground from './testBackground.jpg';
import './App.css';
import { Link } from 'react-router-dom'



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
            <Grid container spacing={8} justify="center">
                <Grid item xs={6}>
                    <Card in={true}>
                        <form onSubmit={this.handleSubmit}>

                        <CardContent>

                            <Typography gutterBottom variant="headline" component="h2">
                                Register
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
                                        label="Username"
                                        type="string"
                                        margin="normal"
                                        id="username" name="username"
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                    >

                                    </TextField>
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
                            <Button type="submit">Register</Button>
                            <Link to='/login'>already have an account? login</Link>
                        </CardActions>

                        </form>


                    </Card>
                </Grid>
            </Grid>
        );

    }

}

export default RegisterForm;