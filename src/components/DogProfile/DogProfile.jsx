import React, { Component } from 'react';
import { connect } from 'react-redux';

class DogProfile extends Component {

    handleClick = () => {
        this.props.history.push('/rescue-home');
    }

    handleEdit = () => {
        this.props.history.push('/edit-dog')
    }

    render() {
        return (
            <>
                <img src={this.props.image} alt="dog photo" height="500px"></img>
                <div>
                    <h1>{this.props.name}</h1>
                    <h2>Breed: {this.props.breed}</h2>
                    <h2>Gender: {this.props.sex}</h2>
                    <h2>Age: {this.props.age} years old</h2>
                    <h2>Description: </h2>
                    <p>{this.props.description}</p>
                </div>
                <h2>Matching Questionnaire:</h2>
                <h4>What is the size of the dog?</h4>
                {this.props.size}
                <h4>Is the dog breed considered a bully breed?</h4>
                {this.props.rent_breed ? <p>No</p> : <p>Yes</p>}
                <h4>Do they get along with other dogs?</h4>
                {this.props.other_dogs ? <p>Yes</p> : <p>No</p>}
                <h4>Do they get along with cats?</h4>
                {this.props.cats ? <p>Yes</p> : <p>No</p>}
                <h4>Do they get along with children?</h4>
                {this.props.kids ? <p>Yes</p> : <p>No</p>}
                <h4>Are they hyperactive and require alot of physical activity?</h4>
                {this.props.active ? <p>Yes</p> : <p>No</p>}
                <h4>Do they require alot of grooming?</h4>
                {this.props.grooming ? <p>Yes</p> : <p>No</p>}
                <h4>Are they in need of alot of extra training?</h4>
                {this.props.training ? <p>Yes</p> : <p>No</p>}
                <h4>Do they have any health problems?</h4>
                {this.props.health ? <p>Yes</p> : <p>No</p>}
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleClick}>Back</button>
            </>
        )
    }
}
const mapStateToProps = state => ({
    ...state.aboutMe,
    dispatch: state.dispatch
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DogProfile);