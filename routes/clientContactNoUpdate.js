var express = require('express');
var router = express.Router();
var clientContactUpdate = require('../models/clientContactUpdate');

router.put('/', function (req, res, next) {
    console.log(req.body);
    clientContactUpdate.clientContactUpdateById(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            //res.status(201).send(`get success...`);
            res.json(count);
        }
    });
});




module.exports = router;