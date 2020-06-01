import React, {Component} from 'react';

class LandingPage extends Component {

    handleAdopt = () => {
        this.props.history.push('/home')
    }

    handleRescue = () => {
        this.props.history.push('/rescue-home')
    }

    render() {
        return(
            <>
                <div className='landingPageButtons'>
                    <button onClick={this.handleAdopt}>I am looking to Adopt</button>
                    <button onClick={this.handleRescue}>I am a Rescue or Shelter</button>
                </div>
                <div>
                    <h3>Happy Tails Mission</h3>
                    <p>**** Paragrah describing the misson of the site ****</p>
                </div>
            </>
        )
    }
}

export default (LandingPage);