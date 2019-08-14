var express = require('express');
var router = express.Router();
var Workforce = require('../models/workforces');

router.get('/', function (req, res, next) {
    Workforce.getAllWorkforceJobRoleSource(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    })
});

module.exports = router;