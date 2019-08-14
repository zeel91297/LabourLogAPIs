var express = require('express');
var router = express.Router();
var clients_invoice = require('../models/clients_invoice');

// router.get('/:id?', function (req, res, next) {
//     if (req.params.id) {
//         //console.log(req.params.id);
//         clients_invoice.getClientInvoiceById(req.params.id, function (err, rows) {
//             if (err) {
//                 res.json(err);
//             }
//             else {
//                 res.json(rows);
//             }
//         });
//     }

// });
router.get('/:id?', function (req, res, next) {
    console.log('in1');
    console.log(req.params.id);
    console.log(req.body);
    clients_invoice.getClientInvoiceById(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            console.log('back');

            res.json(rows);
        }
    });
});
module.exports = router;