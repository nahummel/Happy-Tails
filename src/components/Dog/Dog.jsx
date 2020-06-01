import React, { Component } from 'react';

class Dog extends Component {
    render() {
        return (
            <>
                <h2>{this.props.dog.name}</h2>
            </>
        )
    }
}

export default (Dog);