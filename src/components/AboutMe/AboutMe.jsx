import React, { Component } from 'react';

class AboutMe extends Component {
    handleClick = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <>
                <p>HI</p>
                <button onClick={this.handleClick}>Back</button>
            </>
        )
    }
}

export default (AboutMe);