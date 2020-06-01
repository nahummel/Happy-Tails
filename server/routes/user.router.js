const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  if (req.body.user) {
    const queryText = 'WITH new_user AS (INSERT INTO "users" (username, password, name, street, city, state, zipcode, phone, email, is_user) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id) INSERT INTO "questionnaires" (size, age_range, sex, rent_breed, other_dogs, cats, kids, grooming, active, training, health, user_id) VALUES ($11, $12, $13, $14, $15, $16, $17, $18, $19, $20, (SELECT id FROM new_user));';
    pool.query(queryText, [username, password, req.body.name, req.body.street, req.body.city, req.body.state, req.body.zipcode, req.body.phone, req.body.email, req.body.user, req.body.size, req.body.age, req.body.sex, req.body.rent, req.body.dogs, req.body.cats, req.body.kids, req.body.groom, req.body.active, req.body.train, req.body.health])
      .then(() => res.sendStatus(201))
      .catch((error) => {
        console.log(error)
        // res.sendStatus(500);
      });
  } else {
    const queryText = 'INSERT INTO "users" (username, password, name, street, city, state, zipcode, phone, email, is_user) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
    pool.query(queryText, [username, password, req.body.name, req.body.street, req.body.city, req.body.state, req.body.zipcode, req.body.phone, req.body.email, req.body.user])
      .then(() => res.sendStatus(201))
      .catch((error) => {
        console.log(error)
        // res.sendStatus(500);
      });
  }
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
