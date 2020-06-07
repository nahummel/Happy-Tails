import React from "react";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
    <h1>Happy Tails Mission</h1>
    <p>*** Talk about mission here ***</p>
  </div>
);

export default InfoPage;

// <Paper variant="outlined" className="mission">
// <Typography variant="h6" gutterBottom>
//   Happy Tails Mission
// </Typography>
// <Typography variant="body1">
//   Every year thousands of dogs are surrendered to shelters and rescues
//   due to behavioral issues. These issues typically stem from improper
//   training or knowledge of the breed and temperament of their dog.
//   Here at Happy Tails, it is our mission to match available dogs to
//   prospective dog owners based on their personal information and
//   lifestyle. We hope that by seeing how well one matches the available
//   dogs they can make an informed decision when choosing a dog. We want
//   every tail to end happily.
// </Typography>
// </Paper>
