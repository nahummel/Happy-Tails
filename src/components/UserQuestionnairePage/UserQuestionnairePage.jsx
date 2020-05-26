import React, { Component } from 'react';

class UserQuestionnairePage extends Component {
    handleBack = () => {
        this.props.history.push('/usersignup')
    }

    handleNext = () => {
        this.props.history.push('/userreview')
    }


    render() {
        return (
            <>
                <header>
                    <h3>Create Account</h3>
                    <h3>Quesionnaire</h3>
                    <h3>Review</h3>
                </header>
                <form>
                    <h1>Matching Quesionnaire</h1>
                    <p> ****Talk about why the quiz is important and what it will do**** </p>
                    <div>
                        <h4>What size of dog do you prefer?</h4>
                        <div>
                            <input type="checkbox" id="tiny"></input>
                            <label htmlFor="tiny">Tiny</label>
                        </div>
                        <div>
                            <input type="checkbox" id="small"></input>
                            <label htmlFor="small">Small</label>
                        </div>
                        <div>
                            <input type="checkbox" id="medium"></input>
                            <label htmlFor="medium">Medium</label>
                        </div>
                        <div>
                            <input type="checkbox" id="large"></input>
                            <label htmlFor="large">Large</label>
                        </div>
                    </div>
                    <div>
                        <h4>What age of dog do you prefer?</h4>
                        <div>
                            <input type="checkbox" id="young"></input>
                            <label htmlFor="young">Young</label>
                        </div>
                        <div>
                            <input type="checkbox" id="adult"></input>
                            <label htmlFor="adult">Adult</label>
                        </div>
                        <div>
                            <input type="checkbox" id="senior"></input>
                            <label htmlFor="senior">Senior</label>
                        </div>
                    </div>
                    <div>
                        <h4>What gender of dog do you prefer?</h4>
                        <div>
                            <input type="checkbox" id="male"></input>
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input type="checkbox" id="female"></input>
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div>
                        <h4>Do you own or rent your home</h4>
                        <div>
                            <input type="radio" id="own"></input>
                            <label htmlFor="own">Own</label>
                        </div>
                        <div>
                            <input type="radio" id="rent"></input>
                            <label htmlFor="rent">Rent</label>
                        </div>
                    </div>
                    <div>
                        <h4>Do have other dogs at home?</h4>
                        <div>
                            <input type="radio" id="yesDogs"></input>
                            <label htmlFor="yesDogs">Yes</label>
                        </div>
                        <div>
                            <input type="radio" id="noDogs"></input>
                            <label htmlFor="noDogs">No</label>
                        </div>
                    </div>
                    <div>
                        <h4>Do have cats at home?</h4>
                        <div>
                            <input type="radio" id="yesCats"></input>
                            <label htmlFor="yesCats">Yes</label>
                        </div>
                        <div>
                            <input type="radio" id="noCats"></input>
                            <label htmlFor="noCats">No</label>
                        </div>
                    </div>
                    <div>
                        <h4>Do you live with children?</h4>
                        <div>
                            <input type="radio" id="yesKids"></input>
                            <label htmlFor="yesKids">Yes</label>
                        </div>
                        <div>
                            <input type="radio" id="noKids"></input>
                            <label htmlFor="noKids">No</label>
                        </div>
                    </div>
                    <div>
                        <h4>Do like to stay physically active (running, hiking, ect.)?</h4>
                        <div>
                            <input type="radio" id="yesActive"></input>
                            <label htmlFor="yesActive">Yes</label>
                        </div>
                        <div>
                            <input type="radio" id="noActive"></input>
                            <label htmlFor="noActive">No</label>
                        </div>
                    </div>
                    <div>
                        <h4>Are you willing to put a lot of time/expense into grooming your dog?</h4>
                        <div>
                            <input type="radio" id="yesGroom"></input>
                            <label htmlFor="yesGroom">Yes</label>
                        </div>
                        <div>
                            <input type="radio" id="noGroom"></input>
                            <label htmlFor="noGroom">No</label>
                        </div>
                    </div>
                    <div>
                        <h4>Do you have experince in training dogs?</h4>
                        <div>
                            <input type="radio" id="yesTrain"></input>
                            <label htmlFor="yesTrain">Yes</label>
                        </div>
                        <div>
                            <input type="radio" id="noTrain"></input>
                            <label htmlFor="noTrain">No</label>
                        </div>
                    </div>
                    <div>
                        <h4>Are you willing to adopt a dog that has health problems?</h4>
                        <div>
                            <input type="radio" id="yesHealth"></input>
                            <label htmlFor="yesHealth">Yes</label>
                        </div>
                        <div>
                            <input type="radio" id="noHealth"></input>
                            <label htmlFor="noHealth">No</label>
                        </div>
                    </div>
                    <button onClick={this.handleBack}>Back</button>
                    <button onClick={this.handleNext}>Next</button>
                </form>
            </>
        )
    }
}

export default (UserQuestionnairePage);