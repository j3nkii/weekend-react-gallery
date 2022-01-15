const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool({
    database: 'react_gallery',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000 
});

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log('***** INIT PUT *****');
    console.log(req.params, req.body);
    const sqlText = `
        UPDATE gallery
        SET likes = $1
        WHERE id = $2
    `
    queryParams = [
        req.body.likes,
        req.params.id
    ]
    pool.query(sqlText, queryParams).then((dbRes) => {
        res.sendStatus(201)
        console.log('PUT Suceess, added likes');
    }).catch((err) => {
        console.log('ERR in likes', err);
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `
        SELECT * FROM gallery ORDER BY likes DESC;
    `
    pool.query(sqlText).then((result) => {
        console.log('data from DB', result);
        res.send(result.rows)
    }).catch((err) => {
        console.log('Err Getting data', err);
    })
}); // END GET Route

router.post('/', (req, res) => {
    console.log('***** INIT POST *****');
    console.log(req.params, req.body);
    const sqlText = `
        INSERT INTO gallery
            (path, description)
        VALUES ($1, $2)
    `
    queryParams = [
        req.body.path,
        req.body.description
    ]
    pool.query(sqlText, queryParams).then((dbRes) => {
        res.sendStatus(201)
        console.log('POST Suceess, added likes');
    }).catch((err) => {
        console.log('ERR in POST', err);
    })
}); // END PUT Route

module.exports = router;