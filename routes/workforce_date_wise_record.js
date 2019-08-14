var express = require('express');
var router = express.Router();
var workforces_calender_working_details = require('../models/worf_forces_datewise_details');

router.post('/', function (req, res, next) {
    console.log(req.body);
    workforces_calender_working_details.getWorkForcesCalenderDetailsByIdAndDate(req.body, function (err, count) {
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