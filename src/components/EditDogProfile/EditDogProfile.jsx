import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditDogProfile extends Component {
    state = {
        ...this.props.details
    }

    handleUpdate = () => {
        this.props.dispatch({ type: 'UPDATE_DOG_INFO', payload: { ...this.state } })
        this.props.history.push('/dog-profile')
    }

    handleInputChangeFor = property => (event) => {
        this.setState({
            [property]: event.target.value,
        })
        if (property === 'age') {
            if (event.target.value <= 2) {
                this.setState({
                    age_range: 'young'
                })
            } else if (event.target.value <= 6) {
                this.setState({
                    age_range: 'adult'
                })
            } else if (event.target.value > 6) {
                this.setState({
                    age_range: 'senior'
                })
            }
        }
    }

    handleRadio = (event, property) => {
        if (property === 'male') {
            this.setState({
                sex: 'Male'
            }
            )
        } else if (property === 'female') {
            this.setState({
                sex: 'Female'
            })
        }
        if (property === 'tiny') {
            this.setState({
                size: 'tiny'
            }
            )
        } else if (property === 'small') {
            this.setState({
                size: 'small'
            })
        } else if (property === 'medium') {
            this.setState({
                size: 'medium'
            })
        } else if (property === 'large') {
            this.setState({
                size: 'large'
            })
        }
        if (property === 'noBully') {
            this.setState({
                rent_breed: true
            }
            )
        } else if (property === 'yesBully') {
            this.setState({
                rent_breed: false
            })
        }
        if (property === 'yesDogs') {
            this.setState({
                other_dogs: true
            })
        } else if (property === 'noDogs') {
            this.setState({
                other_dogs: false
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
                grooming: false
            })
        } else if (property === 'yesGroom') {
            this.setState({
                grooming: true
            })
        }
        if (property === 'noTrain') {
            this.setState({
                training: false
            })
        } else if (property === 'yesTrain') {
            this.setState({
                training: true
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


    render() {
        return (
            <>
                <form>
                    <h1>Edit Profile</h1>
                    <div>
                        <label htmlFor="name">
                            Name:
                            <input type="text" placeholder="name" value={this.state.name} onChange={this.handleInputChangeFor('name')} />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="breed">
                            Breed:
                            <input type="text" placeholder="breed" value={this.state.breed} onChange={this.handleInputChangeFor('breed')} />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="age">
                            Age:
                            <input type="text" placeholder="years old" value={this.state.age} onChange={this.handleInputChangeFor('age')} />
                        </label>
                    </div>
                    <div>
                        <p>Gender:</p>
                        <label>
                            <input type="radio" id="male" checked={this.state.sex === 'Male'} onChange={(event) => this.handleRadio(event, 'male')}></input>
                            Male
                        </label>
                        <label>
                            <input type="radio" id="female" checked={this.state.sex === 'Female'} onChange={(event) => this.handleRadio(event, 'female')}></input>
                            Female
                        </label>
                    </div>
                    <div>
                        <label htmlFor="image">
                            Image:
                            <input type="text" placeholder="image url" value={this.state.image} onChange={this.handleInputChangeFor('image')} />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="description">
                            Description:
                            <input type="text" placeholder="description" value={this.state.description} onChange={this.handleInputChangeFor('description')} />
                        </label>
                    </div>
                    <h3>Matching Questionnaire</h3>
                    <div>
                        <h4>What is the size of the dog?</h4>
                        <div>
                            <label>
                                <input type="radio" id="tiny" checked={this.state.size === 'tiny'} onChange={(event) => this.handleRadio(event, 'tiny')}></input>
                                Tiny
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" id="small" checked={this.state.size === 'small'} onChange={(event) => this.handleRadio(event, 'small')}></input>
                                Small
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" id="medium" checked={this.state.size === 'medium'} onChange={(event) => this.handleRadio(event, 'medium')}></input>
                                Medium
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" id="large" checked={this.state.size === 'large'} onChange={(event) => this.handleRadio(event, 'large')}></input>
                                Large
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>Is the dog breed considered a bully breed?</h4>
                        <div>
                            <label>
                                <input type="radio" id="noBully" checked={this.state.rent_breed === true} onChange={(event) => this.handleRadio(event, 'noBully')}></input>
                                No
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" id="yesBully" checked={this.state.rent_breed === false} onChange={(event) => this.handleRadio(event, 'yesBully')}></input>
                                Yes
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>Do they get along with other dogs?</h4>
                        <div>
                            <label>
                                <input type="radio" id="noDogs" checked={this.state.other_dogs === false} onChange={(event) => this.handleRadio(event, 'noDogs')}></input>
                                No
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" id="yesDogs" checked={this.state.other_dogs === true} onChange={(event) => this.handleRadio(event, 'yesDogs')}></input>
                                Yes
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>Do they get along with cats?</h4>
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
                        <h4>Do they get along with children?</h4>
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
                        <h4>Are they hyperactive and require alot of physical activity?</h4>
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
                        <h4>Do they require alot of grooming?</h4>
                        <div>
                            <label>
                                <input type="radio" id="noGroom" checked={this.state.grooming === false} onChange={(event) => this.handleRadio(event, 'noGroom')}></input>
                                No
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" id="yesGroom" checked={this.state.grooming === true} onChange={(event) => this.handleRadio(event, 'yesGroom')}></input>
                                Yes
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>Are they in need of alot of extra training?</h4>
                        <div>
                            <label>
                                <input type="radio" id="noTrain" checked={this.state.training === false} onChange={(event) => this.handleRadio(event, 'noTrain')}></input>
                                No
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" id="YesTrain" checked={this.state.training === true} onChange={(event) => this.handleRadio(event, 'yesTrain')}></input>
                                Yes
                            </label>
                        </div>
                    </div>
                    <div>
                        <h4>Do they have any health problems?</h4>
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
                </form>
                <div>
                    <button onClick={this.handleUpdate}>Save Changes</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    details: {
        name: '',
        image: '',
        description: '',
        breed: '',
        sex: '',
        age: '',
        size: '',
        age_range: '',
        rent_breed: true,
        other_dogs: false,
        cats: false,
        kids: false,
        active: false,
        grooming: false,
        training: false,
        health: false,
        ...state.viewDog,
    },
    user: state.user,
    dispatch: state.dispatch
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(EditDogProfile);