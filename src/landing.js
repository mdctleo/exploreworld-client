import React, { Component } from 'react';
import testBackground from './testBackground.jpg';
import './App.css';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles';

import GridListTile from '@material-ui/core/GridListTile'
// import {styles as classes} from "@material-ui/core/es/CardMedia/CardMedia";

var bgImg= {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: "url(" + testBackground + ")"
};

const styles = {
    card: {
        width: 512
    },
    media: {
        width: 512,
        height: 288
    },
};

class landing extends Component{
    constructor(props){
        super(props);
        this.state={
           fingerprint: props.fingerprint
        };


    }

    componentDidMount() {
        fetch('/picture/initpicture',{
            headers:{
                "Content-Type": "application/json",
            },
            method: 'GET',
            credentials: "include"

        }).then(function(response) {

        }.bind(this));
    }

    render(){
        return(

            <Card className={this.props.classes.card}>
                <CardMedia
                    image="https://material-ui.com/static/images/grid-list/breakfast.jpg"
                    className={this.props.classes.media}/>
            </Card>

        );
    }
}

landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(landing);