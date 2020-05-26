import React, {Component} from 'react';

class LandingPage extends Component {
    render() {
        return(
            <>
                <header>
                    <h1>Happy Tails</h1>
                </header>
                <div className='landingPageButtons'>
                    <button>I am looking to Adopt</button>
                    <button>I am a Rescue or Shelter</button>
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