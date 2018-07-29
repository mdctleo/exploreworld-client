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
            index: 0,
            pictures: null,
            loading: true
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

            return response.json();

        }).then(function(myJson){

            if(myJson.error === null){
                this.setState({pictures: myJson.payload});
                console.log(this.state.pictures);
            }else{
                //TODO: deploy snackbar
            }

            this.setState({loading: false});
        }.bind(this));
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

        if(!this.state.loading) {
            image = require('../imgs/' + pictures[(this.state.index)] + '.jpg');
        }

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