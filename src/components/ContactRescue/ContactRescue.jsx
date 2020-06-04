import React, { Component } from 'react';
import { connect } from 'react-redux';

const dotenv = require('dotenv');
dotenv.config();

class ContactReacue extends Component {
    state = {
        reciever: this.props.rescue.email,
        sender: this.props.user.email,
        emailText: ''
    }

    handleBack = () => {
        this.props.history.push('/about-me')
    }

    handleChange = (event, property) => {
        switch (property) {
            case 'emailText':
                return this.setState({
                    [property]: event.target.value
                })
            default:
                return this.state;
        }
    }

    handleClick = () => {
        this.props.dispatch({type:'SEND_MAIL', payload: this.state})
    }

    render() {
        return (
            <>
                <h2>Contact {this.props.rescue.name}</h2>
                <input type='text' placeholder='I would like to inquire about...'  className='email' onChange={(event) => this.handleChange(event, 'emailText')}></input>
                <button onClick={this.handleClick}>Send</button>
                <button onClick={this.handleBack}>Back</button>
            </>
        )
    }

}

const mapStateToProps = state => ({
    user: state.user,
    rescue: state.rescue,
    dispatch: state.dispatch
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ContactReacue);
