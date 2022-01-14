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
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `
        SELECT * FROM gallery ORDER BY likes ASC;
    `
    pool.query(sqlText).then((result) => {
        console.log('data from DB', result);
        res.send(result.rows)
    }).catch((err) => {
        console.log('Err Getting data', err);
    })
}); // END GET Route

module.exports = router;