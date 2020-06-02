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
            this.setState({ componentToShow: "userQuestionnaire" })
        } else {
            // register the rescue and go to rescue page
            alert("do the rescue stuff")
        }
    }

    handleShowComponent = (componentToShow) => {
        this.setState({ componentToShow })
    }

    render() {
        return (
            <div>
                {this.state.componentToShow === "userInfo" && 
                    <CreateNewAccount 
                        onNext={this.handleCreateNewAccountClick} 
                    />}
                {this.state.componentToShow === "userQuestionnaire" && 
                    <UserQuestionnaire 
                        onNext={() => this.handleShowComponent("userReview")}
                        onBack={() => this.handleShowComponent("userInfo")} 
                    />}
                {this.state.componentToShow === "userReview" && <UserReview 
                        onEditInfo={() => this.handleShowComponent("userInfo")}
                        onEditQuiz={() => this.handleShowComponent("userQuestionnaire")}
                    />}
            </div>
        )
    }
}

export default (RegisterNew);