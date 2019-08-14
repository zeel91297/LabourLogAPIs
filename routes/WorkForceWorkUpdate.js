var express = require('express');
var router = express.Router();
var workforces_calender_working_details_update = require('../models/workforces_calender_working_details_update');

router.put('/', function (req, res, next) {
    console.log(req.body);
    workforces_calender_working_details_update.workforcesCalenderWorkingDetailsUpdateById(req.body, function (err, count) {
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