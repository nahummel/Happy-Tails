const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    const queryText = `SELECT "name", "street", "city", "state", "zipcode", "phone", "email" FROM users WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id]).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(`Error on get rescue ${error}`);
        res.sendStatus(500);
    })
});


module.exports = router;