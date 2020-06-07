import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  mission: {
    marginTop: 40,
    padding: 50,
    textAlign: "center",
  },
}));

const InfoPage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Paper variant="outlined" className={classes.mission}>
        <img src="dog-heart.jpg" />
        <Typography variant="h6" gutterBottom>
          Happy Tails Mission
        </Typography>
        <Typography variant="body1">
          Every year thousands of dogs are surrendered to shelters and rescues
          due to behavioral issues. These issues typically stem from improper
          training or knowledge of the breed and temperament of their dog. Here
          at Happy Tails, it is our mission to match available dogs to
          prospective dog owners based on their personal information and
          lifestyle. We hope that by seeing how well one matches the available
          dogs they can make an informed decision when choosing a dog. We want
          every tail to end happily.
        </Typography>
      </Paper>
    </Container>
  );
};

export default InfoPage;
