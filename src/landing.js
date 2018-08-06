import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CustomizedSnackbars from "./snackbar";
import CircularProgress from '@material-ui/core/CircularProgress';
import {Redirect} from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
    },
    // card: {
    //     width: '512px',
    // },
    // media: {
    //     width: '512px',
    //     height: '288px',
    // },
};

class landing extends Component{
    constructor(props){
        super(props);
        this.state={
            fingerprint: props.fingerprint,
            index: 0,
            pictures: null,
            loading: true,
            error: null,
            redirect: false
        };

        this.clearError = this.clearError.bind(this);
    }

    componentDidMount() {
        fetch('/picture/initpicture',{
            headers:{
                "Content-Type": "application/json",
            },
            method: 'GET',
            credentials: "include"

        }).then(function(response) {

            return response.json();

        }).then(function(myJson){

            if(myJson.error === null){
                this.setState({pictures: myJson.payload});
                console.log(this.state.pictures);
            }else{
                this.setState({error: myJson.payload});


                //TODO: Should have some sort of error enum class like backend
                if(myJson.error === "InvalidAuthorization"){
                    this.setState({redirect: true});
                }

            }

            this.setState({loading: false});
        }.bind(this));
    }

    clearError(){
        this.setState({error: null});
    }

    handleClick(like) {
        // TODO: Add user preferences for the current image to database here.
        console.log(this.state.index, this.state.pictures[this.state.index]);

        if(this.state.index < this.state.pictures.length - 1) {

            this.setState({
                index: this.state.index + 1
            });
        }
    }

    render(){
        let pictures = this.state.pictures;
        let image;
        let errorSnackbar;
        let progressDisc;

        //TODO: FIGURE OUT HOW TO DYNAMICALLY SIZE CARD ACCORDING TO PICTURE SIZE
        var testStyles = {card: {
            width: 512,
        }};
        var testStyles1 = {
            media: {
                width: 512,
                height: 288,
            }

        };

        if(this.state.error){
            errorSnackbar = <CustomizedSnackbars clearError={this.clearError} variant="error" message={this.state.error}/>
        }

        if(this.state.redirect){
            return <Redirect to="/landing" />;
        }

        if(this.state.loading){
            progressDisc =  <CircularProgress size={50} />
        }


        if(!this.state.loading && this.state.error == null) {
            image = require('../imgs/' + pictures[(this.state.index)] + '.jpg');
        }

        return(
            <div className={this.props.classes.root}>
                <Grid container
                      spacing={24}
                      justify={"center"}>
                    <Grid container
                          justify={"center"}>
                        {errorSnackbar}
                        {progressDisc}
                        <Grid item
                              key="image">
                            <Card style={testStyles.card}>
                                <CardMedia
                                    image={image}
                                    style={testStyles1.media}/>
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid item
                          key="like">
                        <Button variant="contained" className="like-button" color="primary" onClick={() => this.handleClick(true)}>
                            Yay
                        </Button>
                    </Grid>
                    <Grid item
                          key="dislike">
                        <Button variant="contained" className="dislike-button" color="primary" onClick={() => this.handleClick(false)}>
                            Nay
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(landing);