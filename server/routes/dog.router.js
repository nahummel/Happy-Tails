const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM dogs JOIN questionnaires ON dogs.id = dog_id;`;
    pool.query(queryText).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(`Error on get dogs ${error}`);
        res.sendStatus(500);
    })
});

router.get('/:id', (req, res) => {
    const queryText = `SELECT * FROM dogs JOIN questionnaires ON dogs.id = dog_id WHERE "rescue_id" = $1;`;
    pool.query(queryText, [req.params.id]).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(`Error on get dogs ${error}`);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    console.log('in post')
    const queryText = `WITH new_dog AS (INSERT INTO "dogs" (name, image, description, breed, sex, age, rescue_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id) INSERT INTO "questionnaires" (size, age_range, sex, rent_breed, other_dogs, cats, kids, grooming, active, training, health, dog_id) VALUES ($8, $9, $5, $10, $11, $12, $13, $14, $15, $16, $17, (SELECT id FROM new_dog));`
    const values = [req.body.name, req.body.image, req.body.description, req.body.breed, req.body.sex, req.body.age, req.body.rescue_id, req.body.size, req.body.age_range, req.body.rent, req.body.dogs, req.body.cats, req.body.kids, req.body.groom, req.body.active, req.body.train, req.body.health]
    pool.query(queryText, values)
    .then(() => res.sendStatus(201))
    .catch((error) => {
        console.log(error)
        res.sendStatus(500);
    });
});

router.delete('/:id', (req,res) => {
    console.log('in delete')
    const queryText = `DELETE FROM "dogs" WHERE "id" = $1;`
    pool.query(queryText, [req.params.id])
    .then(() => res.sendStatus(200))
    .catch((error) => {
        console.log(error)
        res.sendStatus(500);
    });
});

module.exports = router;