import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class AdoptDog extends Component {

    handleClick = () => {
        this.props.dispatch({ type: 'DOG_ID', payload: this.props.dog.id });
        this.props.dispatch({ type: 'STORE_DOG', payload: this.props.dog });
        this.props.history.push('/dog-profile')
    }

    render() {
        return (
            <>
                <Card>
                    <CardContent className="cardContent">
                        <img src={this.props.dog.image} alt="dog photo" height="200px"></img>
                        <h2>{this.props.dog.name}</h2>
                        <button onClick={this.handleClick}>Profile</button>
                        <button>Delete</button>
                    </CardContent>
                </Card>
            </>
        )
    }
}

export default (AdoptDog);