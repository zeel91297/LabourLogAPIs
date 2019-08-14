var express = require('express');
var router = express.Router();
var Clientworkforces = require('../models/clientworkforce.js');

router.post('/add', function (req, res, next) {
    Clientworkforces.addClientwithworkForces(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});
router.post('/update/:id?', function (req, res, next) {
    console.log(req.params.id);
    Clientworkforces.updateClientwithworkForces(req.params.id, req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});
router.delete('/delete/:id?', function (req, res, next) {
    if (req.params.id) {
        //console.log(req.params.id);
        Clientworkforces.deleteClientworkforcesById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
});

module.exports = router;