var express = require('express');
var router = express.Router();
var clients = require('../models/clients');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        //console.log(req.params.id);
        clients.getClientById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        clients.getAllClients(function (err, rows) {
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
    console.log(req.body);
    clients.addClient(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.status(201).send(`Client added with ID: ${count.insertId}`);
        }
    });
});

router.put('/:id', function (req, res, next) {
    clients.editClient(req.body, req.params.id, function (err, rows) {
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
    clients.deleteClient(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
})

module.exports = router;