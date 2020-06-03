import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Dog extends Component {

    handleClick = () => {
        this.props.dispatch({type: 'STORE_DOG', payload: this.props.dog});
        this.props.history.push('/about-me')
    }

    calculate = () => {
        let totalMatches = 0
        const total = 11
        for (let size of this.props.userQuest.size) {
            if (size === this.props.dog.size) {
            totalMatches++
            }
        }
        for (let age of this.props.userQuest.age_range) {
            if (age === this.props.dog.age_range) {
                totalMatches++
            }
        }
        for (let sex of this.props.userQuest.sex) {
            if (sex === this.props.dog.sex) {
                totalMatches++
            }
        }
        if (this.props.userQuest.rent_breed === this.props.dog.rent_breed || !this.props.userQuest.rent_breed) {
            totalMatches++
        }
        if (this.props.userQuest.other_dogs === this.props.dog.other_dogs || !this.props.userQuest.other_dogs) {
            totalMatches++
        }
        if (this.props.userQuest.cats === this.props.dog.cats || !this.props.userQuest.cats) {
            totalMatches++
        }
        if (this.props.userQuest.kids === this.props.dog.kids || !this.props.userQuest.kids) {
            totalMatches++
        }
        if (this.props.userQuest.grooming === this.props.dog.grooming) {
            totalMatches++
        }
        if (this.props.userQuest.active === this.props.dog.active) {
            totalMatches++
        }
        if (this.props.userQuest.training === this.props.dog.training) {
            totalMatches++
        }
        if (this.props.userQuest.health === this.props.dog.health) {
            totalMatches++
        }

        return Math.round(totalMatches/total*100)
    }

    render() {
        console.log('dog', this.props.dog.size)
        console.log('user', this.props.user)
        console.log('userQuest', this.props.userQuest.size)
        return (
            <>
                <Card>
                    <CardContent className="cardContent">
                        <img src={this.props.dog.image} alt="dog photo" height="200px" width="150px"></img>
                        <h2>{this.props.dog.name}</h2>
                        <h3>{this.calculate()}% Matching</h3>
                        <button onClick={this.handleClick}>About Me</button>
                    </CardContent>
                </Card>
            </>
        )
    }
}

// this allows us to use <App /> in index.js
export default (Dog);
