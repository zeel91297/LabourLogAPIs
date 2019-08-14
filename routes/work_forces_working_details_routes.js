var express = require('express');
var router = express.Router();
var workforces_working_details = require('../models/worf_forces_working_details');

router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        //console.log(req.params.id);
        workforces_working_details.getWorkForcesDetailsById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        workforces_working_details.getAllWorkForcesDetails(function (err, rows) {
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
    //   console.log(req.body);
    var date = req.body.work_date;
    var hour = req.body.work_hours;
    delete req.body.work_date;
    delete req.body.work_hours;

    workforces_working_details.addClientWorkforces(req.body, function (err, count) {
        if (err) {

            res.json(err);
        }
        else {
            req.body.client_workforce_id = count.insertId;
            req.body.work_date = date;
            req.body.work_hours = hour;

            var clients_workforces_id = count.insertId;
            //  res.status(201).send(`clients_workforces Details added with ID: ${count.insertId}`);
            delete req.body.workforce_id;
            delete req.body.client_id;
            // console.log(req.body);
            var mydata = req.body;
            console.log(mydata);
            workforces_working_details.addWorkforces_working_details(mydata, function (err, count) {
                if (err) {

                    res.json(err);
                }
                else {
                    res.status(201).send(`workforces_working_details  added with ID: ${count.insertId} and clients_workforces Details added with ID: ${clients_workforces_id}`);
                }
            });
        }
    });

});

router.put('/:id', function (req, res, next) {
    var client_workforce_id = req.body.client_workforce_id;
    var workforce_id = req.body.workforce_id;
    var workforce_name = req.body.workforce_name;
    var client_id = req.body.client_id;
    var client_name = req.body.client_name;

    delete req.body.client_workforce_id;
    delete req.body.workforce_id;
    delete req.body.workforce_name;
    delete req.body.client_id;
    delete req.body.client_name;


    workforces_working_details.editWorkforces_working_details(req.body, req.params.id, function (err, rows) {
        if (err) {
            console.log("mm");
            res.json(err);
        }

        else {

            // req.body.client_workforce_id=client_workforce_id;
            req.body.client_id = client_id;

            // delete req.body.workforce_work_id;
            delete req.body.work_date;
            delete req.body.work_hours;

            var mydata = req.body;

            workforces_working_details.editWorkforces_working_details_client(mydata, client_workforce_id, function (err, rows) {
                console.log(req.body);
                //  res.json(rows);
                if (err) {

                    res.json(err);
                }
                else {
                    // res.json(rows);
                    // res.status(201).send(`workforces_working_details  added with ID: ${count.insertId} and clients_workforces Details added with ID: ${clients_workforces_id}`);
                }
            });




            res.json(rows);
            //res.status(201).send(`Workforce added with ID: ${rows.insertId}`);
        }
    });
});

// router.delete('/:id', function (req, res, next) {
//     workforces_working_details.deleteClient(req.params.id, function (err, rows) {
//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(rows);
//         }
//     });
// })

module.exports = router;