var express = require('express');
var router = express.Router();
var Workforce = require('../models/workforces');
var multer = require('multer');
var path = require('path');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        //console.log(req.params.id);
        Workforce.getWorkforceById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        Workforce.getAllWorkForces(function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        })
    }
});

/* router.post('/', function (req, res, next) {
    console.log(req.body);
    Workforce.addWorkforce(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.status(201).send(`Workforce added with ID: ${count.insertId}`);
        }
    });
}); */

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/workforces')
    },
    filename: (req, file, cb) => {
        console.log(file.fieldname);
        console.log(Date.now());
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({
    storage: storage
});

router.post('/', upload.single('image'), (req, res, next) => {
    console.log(req.body);
    console.log(req.file.filename);

    Workforce.addWorkForceImg(req.body, req.file.filename, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.status(201).send(`Workforce added with ID: ${rows.insertId}`);
        }
    });
});

router.put('/:id', function (req, res, next) {
    Workforce.editWorkforce(req.body, req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        }

        else {
            res.json(rows);
            //res.status(201).send(`Workforce added with ID: ${rows.insertId}`);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    Workforce.deleteWorkforce(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;