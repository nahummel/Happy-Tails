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

  console.log(req.body)
  if (req.body.is_user) {
    const queryText = 'WITH new_user AS (INSERT INTO "users" (username, password, name, street, city, state, zipcode, phone, email, is_user) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id) INSERT INTO "questionnaires" (size, age_range, sex, rent_breed, other_dogs, cats, kids, grooming, active, training, health, user_id) VALUES ($11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, (SELECT id FROM new_user));'
    pool.query(queryText, [username, password, req.body.name, req.body.street, req.body.city, req.body.state, req.body.zipcode, req.body.phone, req.body.email, req.body.is_user, JSON.stringify(req.body.size), JSON.stringify(req.body.age), JSON.stringify(req.body.sex), req.body.rent, req.body.dogs, req.body.cats, req.body.kids, req.body.groom, req.body.active, req.body.train, req.body.health])
      .then(() => res.sendStatus(201))
      .catch((error) => {
        console.log(error)
        // res.sendStatus(500);
      });
  } else {
    const queryText = 'INSERT INTO "users" (username, password, name, street, city, state, zipcode, phone, email, is_user) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)';
    pool.query(queryText, [username, password, req.body.name, req.body.street, req.body.city, req.body.state, req.body.zipcode, req.body.phone, req.body.email, req.body.is_user])
      .then(() => res.sendStatus(201))
      .catch((error) => {
        console.log(error)
        // res.sendStatus(500);
      });
  }
});

router.get('/quest', rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT * FROM questionnaires WHERE "user_id" = $1;`;
  pool.query(queryText, [req.user.id]).then((result) => {
    // parse stringified arrays from postgres columns back to json arrays
    const formattedRows = result.rows.map(row => {
      return {
        ...row,
        size: JSON.parse(row.size),
        age_range: JSON.parse(row.age_range),
        sex: JSON.parse(row.sex)
      }
    });
    res.send(formattedRows)
  }).catch((error) => {
    console.log(`Error on get dogs ${error}`);
    res.sendStatus(500);
  })  
})

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
