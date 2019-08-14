var db = require('../dbconnection');

var WorkForcesWorkingDetails = {
    getAllWorkForcesDetails: function (callback) {
        return db.query("SELECT wf.workforce_name,cli.client_name,wwd.work_date,wwd.work_hours FROM workforces_working_details AS wwd JOIN clients_workforces AS cw ON (cw.client_workforce_id = wwd.client_workforce_id)JOIN workforces AS wf ON (cw.workforce_id = wf.workforce_id) JOIN clients AS cli ON (cw.client_id = cli.client_id)", callback);
    },
    getWorkForcesDetailsById: function (id, callback) {
        //console.log(id);
        return db.query("SELECT wwd.workforce_work_id,wwd.client_workforce_id, wf.workforce_id,wf.workforce_name, cli.client_id, cli.client_name,wwd.work_date,wwd.work_hours FROM workforces_working_details AS wwd JOIN clients_workforces AS cw ON (cw.client_workforce_id = wwd.client_workforce_id)JOIN workforces AS wf ON (cw.workforce_id = wf.workforce_id) JOIN clients AS cli ON (cw.client_id = cli.client_id)WHERE cw.workforce_id = ?", [id], callback);
        
    },
    addClientWorkforces: function (WorkingDetailsData, callback) 
    {

        //   console.log(WorkingDetailsData);
        //return db.query("INSERT INTO `workforces` ( `workforce_name`, `workforce_rate`, `job_role_id`, `workforce_contact`, `source_id`, `workforce_bill_rate`,) VALUES (?, ?, ?, ?, ?, ?);", [null, WorkForce.workforce_name, WorkForce.workforce_rate, WorkForce.job_role_id, WorkForce.workforce_contact, WorkForce.source_id, WorkForce.workforce_bill_rate, null]);
    //    var id;
       
        // db.query('INSERT INTO clients_workforces SET ?', [WorkingDetailsData], function (error, results, fields) {
        //     if (error) throw error;
        //     console.log(results.insertId);
        //     // id=results.insertId;
        //     WorkingDetailsData.client_workforce_id=results.insertId
        //   });

          
        //   return db.query('INSERT INTO clients_workforces SET ?', [WorkingDetailsData], callback);
        //  return db.query('insert into workforces_working_details set ?', [WorkingDetailsData], callback);
        return db.query('INSERT INTO clients_workforces SET ?', [WorkingDetailsData], callback);
    },
    addWorkforces_working_details: function (WorkingDetailsData, callback) 
    {
           console.log(WorkingDetailsData);
        
         return db.query('insert into workforces_working_details set ?', [WorkingDetailsData], callback);
    },
    editWorkforces_working_details: function (WorkingDetailsData, id, callback) {

        

        return db.query('update workforces_working_details set ? where workforce_work_id =?', [WorkingDetailsData, id], callback);
        //return db.query("UPDATE `workforces` SET `workforce_name` = ?, `workforce_rate` = '?', `job_role_id` = ?,`workforce_contact` = ?, `workforce_source_id` = ?,`workforce_bill_rate` = ? WHERE `workforce_id` = ?;",[WorkForce.workforce_name, WorkForce.workforce_rate, WorkForce.job_role_id, WorkForce.workforce_contact, WorkForce.source_id, WorkForce.workforce_bill_rate, WorkForce.workforce_id], callback);
    },
    editWorkforces_working_details_client: function (WorkingDetailsData, id, callback) {
        console.log('client_workforce_id'+id);
        

        return db.query('update clients_workforces set client_id=? where client_workforce_id =?', [WorkingDetailsData.client_id, id], callback);
        //return db.query("UPDATE `workforces` SET `workforce_name` = ?, `workforce_rate` = '?', `job_role_id` = ?,`workforce_contact` = ?, `workforce_source_id` = ?,`workforce_bill_rate` = ? WHERE `workforce_id` = ?;",[WorkForce.workforce_name, WorkForce.workforce_rate, WorkForce.job_role_id, WorkForce.workforce_contact, WorkForce.source_id, WorkForce.workforce_bill_rate, WorkForce.workforce_id], callback);
    },
    // deleteClient: function (id, callback) 
    // {
    //     return db.query("delete from clients where client_id=?", [id], callback);
    // }
};

module.exports = WorkForcesWorkingDetails;