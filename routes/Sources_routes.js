var express = require('express');
var router = express.Router();
var Sources = require('../models/sources');

router.get('/show/:id?', function (req, res, next) {
    if (req.params.id) {
        //console.log(req.params.id);
        Sources.getSourcesById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        Sources.getAllSources(function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        })
    }
});

router.post('/', function (req, res, next) {
    Sources.addSources(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});
router.put('/update/:id?', function (req, res, next) {
    console.log(req.body);
    console.log(req.params.id);
    Sources.updatesource(req.params.id, req.body, function (err, count) {
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
        Sources.deleteSourcesById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
});

router.get('/workforcebysourceid/:id?', function (req, res, next) {
    Sources.WorkforcecountBySourcebyID(req.params.id, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    })
});


module.exports = router;