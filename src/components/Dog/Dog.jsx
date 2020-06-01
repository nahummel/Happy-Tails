import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Dog extends Component {
    render() {
        return (
            <>
                <Card>
                    <CardContent className="cardContent">
                        <img src={this.props.dog.image} alt="dog photo" height="200px"></img>
                        <h2>{this.props.dog.name}</h2>
                        <button>About Me</button>
                    </CardContent>
                </Card>
            </>
        )
    }
}

export default (Dog);