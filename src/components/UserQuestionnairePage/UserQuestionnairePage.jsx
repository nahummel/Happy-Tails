import React, { Component } from 'react';

class UserQuestionnairePage extends Component {
    state = {
        size: [],
        age: [],
        sex: [],
        rent: false,
        dogs: false,
        cats: false,
        kids: false,
        active: false,
        groom: false,
        train: false,
        health: false,
    }

    handleChecked = (event) => {
        if (event.target.checked) {
            console.log('tiny checked')
        } else {
            console.log('tiny unchecked')
        }
    }

    handleRadio = (event, property) => {
        if(property === 'own'){
            this.setState({
                rent: false
            }
        )} else if (property === 'rent') {
            this.setState({
                rent: true
            })
        }
        if(property === 'yesDogs'){
            this.setState({
                dogs: true
            })
        } else if (property === 'noDogs') {
            this.setState({
                dogs: false
            })
        }
        if (property === 'noCats') {
            this.setState({
                cats: false
            })
        } else if (property === 'yesCats') {
            this.setState({
                cats: true
            })
        }
        if (property === 'noKids') {
            this.setState({
                kids: false
            })
        } else if (property === 'yesKids') {
            this.setState({
                kids: true
            })
        }
        if (property === 'noActive') {
            this.setState({
                active: false
            })
        } else if (property === 'yesActive') {
            this.setState({
                active: true
            })
        }
        if (property === 'noGroom') {
            this.setState({
                groom: false
            })
        } else if (property === 'yesGroom') {
            this.setState({
                groom: true
            })
        }
        if (property === 'noTrain') {
            this.setState({
                train: false
            })
        } else if (property === 'yesTrain') {
            this.setState({
                train: true
            })
        }
        if (property === 'noHealth') {
            this.setState({
                health: false
            })
        } else if (property === 'yesHealth') {
            this.setState({
                health: true
            })
        }
    }

    handleBack = () => {
        this.props.history.push('/usersignup')
    }

    handleNext = () => {
        // this.props.history.push('/userreview')
        console.log(this.state)
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
                            <label>
                                <input type="checkbox" id="tiny" onChange={this.handleChecked}></input>
                                Tiny
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" id="small"></input>
                                Small
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" id="medium"></input>
                                Medium
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" id="large"></input>
                                Large
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>What age of dog do you prefer?</h4>
                        <div>
                            <label>
                                <input type="checkbox" id="young"></input>
                                Young
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" id="adult"></input>
                                Adult
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" id="senior"></input>
                                Senior
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>What gender of dog do you prefer?</h4>
                        <div>
                            <label>
                                <input type="checkbox" id="male"></input>
                                Male
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" id="female"></input>
                                Female
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>Do you own or rent your home</h4>
                        <div>
                            <label>
                                <input type="radio" id="own" checked={this.state.rent === false} onChange={(event) => this.handleRadio(event, 'own')}></input>
                                Own
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" id="rent" checked={this.state.rent === true} onChange={(event) => this.handleRadio(event, 'rent')}></input>
                                Rent
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>Do have other dogs at home?</h4>
                        <div>
                            <label>
                                <input type="radio" id="noDogs" checked={this.state.dogs === false} onChange={(event) => this.handleRadio(event, 'noDogs')}></input>
                                No
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" id="yesDogs" checked={this.state.dogs === true} onChange={(event) => this.handleRadio(event, 'yesDogs')}></input>
                                Yes
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>Do have cats at home?</h4>
                        <div>
                            <label>
                                <input type="radio" id="noCats" checked={this.state.cats === false} onChange={(event) => this.handleRadio(event, 'noCats')}></input>
                                No
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" id="yesCats" checked={this.state.cats === true} onChange={(event) => this.handleRadio(event, 'yesCats')}></input>
                                Yes
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>Do you live with children?</h4>
                        <div>
                            <label>
                                <input type="radio" id="noKids" checked={this.state.kids === false} onChange={(event) => this.handleRadio(event, 'noKids')}></input>
                                No
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" id="yesKids" checked={this.state.kids === true} onChange={(event) => this.handleRadio(event, 'yesKids')}></input>
                                Yes
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>Do like to stay physically active (running, hiking, ect.)?</h4>
                        <div>
                            <label>
                                <input type="radio" id="noActive" checked={this.state.active === false} onChange={(event) => this.handleRadio(event, 'noActive')}></input>
                                No
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" id="yesActive" checked={this.state.active === true} onChange={(event) => this.handleRadio(event, 'yesActive')}></input>
                                Yes
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>Are you willing to put a lot of time/expense into grooming your dog?</h4>
                        <div>
                            <label>
                                <input type="radio" id="noGroom" checked={this.state.groom === false} onChange={(event) => this.handleRadio(event, 'noGroom')}></input>
                                No
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" id="yesGroom" checked={this.state.groom === true} onChange={(event) => this.handleRadio(event, 'yesGroom')}></input>
                                Yes
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>Do you have experince in training dogs?</h4>
                        <div>
                            <label>
                                <input type="radio" id="noTrain" checked={this.state.train === false} onChange={(event) => this.handleRadio(event, 'noTrain')}></input>
                                No
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" id="YesTrain" checked={this.state.train === true} onChange={(event) => this.handleRadio(event, 'yesTrain')}></input>
                                Yes
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>Are you willing to adopt a dog that has health problems?</h4>
                        <div>
                            <label>
                                <input type="radio" id="noHealth" checked={this.state.health === false} onChange={(event) => this.handleRadio(event, 'noHealth')}></input>
                                No
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" id="yesHealth" checked={this.state.health === true} onChange={(event) => this.handleRadio(event, 'yesHealth')}></input>
                                Yes
                            </label>
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