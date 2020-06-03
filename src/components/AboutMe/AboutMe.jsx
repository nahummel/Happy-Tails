import React, { Component } from 'react';
import { connect } from 'react-redux';

class AboutMe extends Component {

    handleClick = () => {
        this.props.history.push('/home');
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
                    <h4>Information about {this.props.details.name}</h4>
                    <p>{this.props.details.description}</p>
                </div>
                <button onClick={this.handleClick}>Back</button>
            </>
        )
    }
}
const mapStateToProps = state => ({
    details: state.viewDog,
    dispatch: state.dispatch
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AboutMe);

