import React, { Component } from 'react';
import { connect } from 'react-redux';

class AboutMe extends Component {

    handleClick = () => {
        this.props.history.push('/home');
    }

    handleContact = () => {
        this.props.history.push('/contact-rescue');
    }

    render() {
        return (
            <>
                <img src={this.props.details.image} alt="dog photo" height="500px"></img>
                <div>
                    <h1>{this.props.details.name}</h1>
                    <h2>Breed: {this.props.details.breed}</h2>
                    <h2>Gender: {this.props.details.sex}</h2>
                    <h2>Age: {this.props.details.age} years old</h2>
                </div>
                <div>
                    <h3>Information about {this.props.details.name}:</h3>
                    <p>{this.props.details.description}</p>
                </div>
                <div>
                    <h3>Rescue Information:</h3>
                    <h4>{this.props.rescue.name}</h4>
                    <p>{this.props.rescue.street}</p>
                    <p>{this.props.rescue.city}, {this.props.rescue.state} {this.props.rescue.zipcode}</p>
                    <p>Phone: {this.props.rescue.phone}</p>
                    <p>Email: {this.props.rescue.email}</p>
                </div>
                <button onClick={this.handleClick}>Back</button>
                <button onClick={this.handleContact}>Contact Rescue</button>
            </>
        )
    }
}
const mapStateToProps = state => ({
    details: state.viewDog,
    rescue: state.rescue,
    dispatch: state.dispatch
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AboutMe);

