import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
            fingerprint: props.fingerprint,
            index: 1
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

    handleClick(like) {
        // TODO: Add user preferences for the current image to database here.

        this.setState({
            fingerprint: this.state.fingerprint,
            index: this.state.index + 1
        });
    }

    render(){
        const image = require('../imgs/' + this.state.index % 10 + '.jpg');

        return(
            <div>
                <Card className={this.props.classes.card}>
                    <CardMedia
                        image={image}
                        className={this.props.classes.media}/>
                </Card>
                <Grid container justify="center" spacing={16}>
                    <Grid key="like" item>
                        <Button variant="contained" className="like-button" color="primary" onClick={() => this.handleClick(true)}>
                            Yay
                        </Button>
                    </Grid>
                    <Grid key="dislike" item>
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