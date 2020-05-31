import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserReviewPage extends Component {
    
    
    conditionals = (question) => {
        if (question) {
            return(
            <p>Yes</p>
            )
        } else {
            return(
            <p>No</p>
            )
        }
    }

    registerUser = () => {

        if (this.props.userInfo.username && this.props.userInfo.password) {
            this.props.dispatch({
                type: 'REGISTER',
                payload: {
                    username: this.props.userInfo.username,
                    password: this.props.userInfo.password,
                    f_name: this.props.userInfo.f_name,
                    l_name: this.props.userInfo.l_name,
                    street: this.props.userInfo.street,
                    city: this.props.userInfo.city,
                    state: this.props.userInfo.state,
                    zipcode: this.props.userInfo.zipcode,
                    phone: this.props.userInfo.phone,
                    email: this.props.userInfo.email,
                    size: this.props.userQuest.size,
                    age: this.props.userQuest.age,
                    sex: this.props.userQuest.sex,
                    rent: this.props.userQuest.rent,
                    dogs: this.props.userQuest.dogs,
                    cats: this.props.userQuest.cats,
                    kids: this.props.userQuest.kids,
                    active: this.props.userQuest.active,
                    groom: this.props.userQuest.groom,
                    train: this.props.userQuest.train,
                    health: this.props.userQuest.health,
                },
            });
            // this.props.dispatch({ type: 'RESET_ANWSERS' });
            this.props.dispatch({ type: 'RESET_INFO' });
        } else {
            this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
        }
    } // end registerUser

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    

    render() {
        return (
            <>
                <h3>Create Account</h3>
                <h3>Quesionnaire</h3>
                <h3>Review</h3>
                <div>
                    <h2>Personal Information</h2>
                    <h4>Name:</h4>
                    <p>{this.props.userInfo.f_name} {this.props.userInfo.l_name}</p>
                    <h4>Address:</h4>
                    <p>{this.props.userInfo.street}</p>
                    <p>{this.props.userInfo.city}, {this.props.userInfo.state}</p>
                    <p>{this.props.userInfo.zipcode}</p>
                    <h4>Phone:</h4>
                    <p>{this.props.userInfo.phone}</p>
                    <h4>E-mail:</h4>
                    <p>{this.props.userInfo.email}</p>
                    <button>Edit</button>
                </div>
                <div>
                    <h2>Matching Questionnaire</h2>
                    <h4>What size of dog do you prefer?</h4>
                    {this.props.userQuest.size.map((size) => {
                        return(
                            <p key={size}>{size}</p>
                        )
                    })}
                    <h4>What age of dog do you prefer?</h4>
                    {this.props.userQuest.age.map((age) => {
                        return (
                            <p key={age}>{age}</p>
                        )
                    })}
                    <h4>What gender of dog do you prefer?</h4>
                    {this.props.userQuest.sex.map((sex) => {
                        return (
                            <p key={sex}>{sex}</p>
                        )
                    })}
                    <h4>Do you rent your home</h4>
                    {this.conditionals(this.props.userQuest.rent)}
                    <h4>Do have other dogs at home?</h4>
                    {this.conditionals(this.props.userQuest.dogs)}
                    <h4>Do have cats at home?</h4>
                    {this.conditionals(this.props.userQuest.cats)}
                    <h4>Do you live with children?</h4>
                    {this.conditionals(this.props.userQuest.kids)}
                    <h4>Do like to stay physically active (running, hiking, ect.)?</h4>
                    {this.conditionals(this.props.userQuest.active)}
                    <h4>Are you willing to put a lot of time/expense into grooming your dog?</h4>
                    {this.conditionals(this.props.userQuest.groom)}
                    <h4>Do you have experince in training dogs?</h4>
                    {this.conditionals(this.props.userQuest.train)}
                    <h4>Are you willing to adopt a dog that has health problems?</h4>
                    {this.conditionals(this.props.userQuest.health)}
                    <button>Edit</button>
                </div>
                <div>
                    <button onClick={this.registerUser}>Register</button>
                </div>
            </>
        )
    }
}

const putStateOnProps = (reduxState) => ({ userInfo: reduxState.userInfo, userQuest: reduxState.userQuest });

export default connect(putStateOnProps)(UserReviewPage);