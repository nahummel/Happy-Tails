const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM dogs;`;
    pool.query(queryText).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(`Error on get dogs ${error}`);
        res.sendStatus(500);
    })
});

router.get('/:id', (req, res) => {
    const queryText = `SELECT * FROM dogs WHERE "rescue_id" = $1;`;
    pool.query(queryText, [req.params.id]).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(`Error on get dogs ${error}`);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;