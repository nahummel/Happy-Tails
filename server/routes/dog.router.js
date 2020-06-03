const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM dogs JOIN questionnaires ON dogs.id = dog_id ORDER BY "name";`;
    pool.query(queryText).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(`Error on get dogs ${error}`);
        res.sendStatus(500);
    })
});

router.get('/:id', (req, res) => {
    const queryText = `SELECT * FROM dogs JOIN questionnaires ON dogs.id = dog_id WHERE "rescue_id" = $1 ORDER BY "name";`;
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
    console.log('in delete', req.params)
    const queryText = `DELETE FROM "dogs" WHERE "id" = $1;`
    pool.query(queryText, [req.params.id])
    .then(() => res.sendStatus(200))
    .catch((error) => {
        console.log(error)
        res.sendStatus(500);
    });
});

// router.delete('/:id', (req, res) => {
//     console.log('in delete')
//     const queryText = `DELETE FROM "dogs" WHERE "id" = $1;`
//     pool.query(queryText, [req.params.id])
//         .then(() => res.sendStatus(200))
//         .catch((error) => {
//             console.log(error)
//             res.sendStatus(500);
//         });
// });

router.put('/:id', (req,res) => {
    console.log('in put')
    console.log(req.body)
    const queryText = `UPDATE "dogs" SET "name"=$1, "image"=$2, "description"=$3, "breed"=$4, "sex"=$5, "age"=$6 WHERE id=$7;`
    const values = [req.body.name, req.body.image, req.body.description, req.body.breed, req.body.sex, req.body.age, req.params.id]
    pool.query(queryText, values)
    .then(() => {
        console.log('in put2')
        const queryText = `UPDATE "questionnaires" SET "size"=$1, "age_range"=$2, "sex"=$3, "rent_breed"=$4, "other_dogs"=$5, "cats"=$6, "kids"=$7, "grooming"=$8, "active"=$9, "training"=$10, "health"=$11 WHERE id=$12;`
        const values = [req.body.size, req.body.age_range, req.body.sex, req.body.rent_breed, req.body.other_dogs, req.body.cats, req.body.kids, req.body.grooming, req.body.active, req.body.training, req.body.health, req.body.id]
        pool.query(queryText, values)
        res.sendStatus(200)
    })
    .catch((error) => {
        console.log(error)
        res.sendStatus(500);
    });
});

module.exports = router;