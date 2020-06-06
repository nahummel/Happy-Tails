import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
};

class Dog extends Component {
  handleClick = () => {
    this.props.dispatch({ type: "STORE_DOG", payload: this.props.dog });
    this.props.dispatch({
      type: "FETCH_RESCUE",
      payload: this.props.dog.rescue_id,
    });
    this.props.history.push("/about-me");
  };

  calculate = () => {
    let totalMatches = 0;
    const total = 11;
    const { userQuest, dog } = this.props;
    if (!userQuest || !dog) {
      return 0;
    }

    if (userQuest.size && userQuest.size.length) {
      for (let size of userQuest.size) {
        if (size === dog.size) {
          totalMatches++;
        }
      }
    }

    if (userQuest.age_range && userQuest.age_range.length) {
      for (let age of userQuest.age_range) {
        if (age === dog.age_range) {
          totalMatches++;
        }
      }
    }

    if (userQuest.sex && userQuest.sex.length) {
      for (let sex of userQuest.sex) {
        if (sex === dog.sex) {
          totalMatches++;
        }
      }
    }

    // If user is renting, then the dog can't be a bully breed
    // OR if user owns
    if (userQuest.rent_breed === dog.rent_breed || !userQuest.rent_breed) {
      totalMatches++;
    }
    // If user has other dogs, then the dog needs to get along with other dogs
    // OR if user does not have other dogs
    if (userQuest.other_dogs === dog.other_dogs || !userQuest.other_dogs) {
      totalMatches++;
    }
    // If user has cats, then the dog needs to get along with cats
    // OR if user does not have cats
    if (userQuest.cats === dog.cats || !userQuest.cats) {
      totalMatches++;
    }
    // If user has kids, then the dog needs to get along with kids
    // OR if user does not have kids
    if (userQuest.kids === dog.kids || !userQuest.kids) {
      totalMatches++;
    }
    // If the dog requires grooming, then user must be okay with grooming
    // OR if dog does not require grooming
    if (dog.grooming === userQuest.grooming || !dog.grooming) {
      totalMatches++;
    }
    // If the dog requires a lot of activity, then user must be active
    if (userQuest.active === dog.active) {
      totalMatches++;
    }
    // If the dog requires training, then user must be experienced in training
    // OR if dog does not require training
    if (dog.training === userQuest.training || !dog.training) {
      totalMatches++;
    }
    // If the dog has health problems, then user must be willing to adopt a dog with health problems
    // OR if dog does not have health problems
    if (dog.health === userQuest.health || !dog.health) {
      totalMatches++;
    }

    return Math.round((totalMatches / total) * 100);
  };

  render() {
    const { classes, dog } = this.props;
    return (
      <Card className={classes.root} onClick={this.handleClick}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={dog.image}
            title={`${dog.name} Photo`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {dog.name}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {this.calculate()}% Matching
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

// this allows us to use <App /> in index.js
export default withStyles(styles)(Dog);
