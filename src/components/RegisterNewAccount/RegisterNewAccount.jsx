import React, { Component } from 'react';
import CreateNewAccount from '../CreateNewAccountPage/CreateNewAccount'
import UserQuestionnaire from '../UserQuestionnairePage/UserQuestionnairePage';
import UserReview from '../UserReviewPage/UserReviewPage';

class RegisterNew extends Component {
    state = {
        componentToShow: 'userInfo'
    }

    handleCreateNewAccountClick = (user) => {
        if (user) {
            this.setState({ componentToShow: "userQuestionnare" })
        } else {
            // register the rescue and go to rescue page
            alert("do the rescue stuff")
        }
    }

    showReview = () => {
        this.setState({componentToShow: 'userReview'})
    }

    render() {
        return (
            <div>
                {this.state.componentToShow === "userInfo" && <CreateNewAccount onClick={this.handleCreateNewAccountClick}/>}
                {this.state.componentToShow === "userQuestionnare" && <UserQuestionnaire onClick={this.showReview}/>}
                {this.state.componentToShow === "userReview" && <UserReview />}
            </div>
        )
    }
}

export default (RegisterNew);