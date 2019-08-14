var db = require('../dbconnection');

var Workforces = {
    getAllWorkForces: function (callback) {
        /* return db.query("select * from workforces", callback); */
        return db.query("SELECT * from workforces w, job_roles j, sources s WHERE w.job_role_id=j.job_role_id AND w.source_id=s.source_id", callback);
    },
    getWorkforceById: function (id, callback) {
        //console.log(id);
        /* return db.query("SELECT * FROM `workforces` WHERE `workforce_id`=?", [id], callback); */
        return db.query("SELECT * from workforces w, job_roles j, sources s WHERE w.workforce_id=1 AND w.job_role_id=j.job_role_id AND w.source_id=s.source_id", [id], callback);
    },
    addWorkforce: function (WorkForce, callback) {
        console.log(WorkForce);
        //return db.query("INSERT INTO `workforces` ( `workforce_name`, `workforce_rate`, `job_role_id`, `workforce_contact`, `source_id`, `workforce_bill_rate`,) VALUES (?, ?, ?, ?, ?, ?);", [null, WorkForce.workforce_name, WorkForce.workforce_rate, WorkForce.job_role_id, WorkForce.workforce_contact, WorkForce.source_id, WorkForce.workforce_bill_rate, null]);
        return db.query('insert into workforces set ?', [WorkForce], callback);
    },
    addWorkForceImg: function (WorkForce, filename, callback) {
        return db.query('insert into workforces (workforce_id,workforce_name,workforce_rate,job_role_id,workforce_contact,source_id,workforce_bill_rate,workforce_pic) values (?,?,?,?,?,?,?,?)', [null, WorkForce.workforce_name, WorkForce.workforce_rate, WorkForce.job_role_id, WorkForce.workforce_contact, WorkForce.source_id, WorkForce.workforce_bill_rate, filename], callback);
    },
    editWorkforce: function (WorkForce, id, callback) {
        return db.query('update workforces set ? where workforce_id=?', [WorkForce, id], callback);
        //return db.query("UPDATE `workforces` SET `workforce_name` = ?, `workforce_rate` = '?', `job_role_id` = ?,`workforce_contact` = ?, `workforce_source_id` = ?,`workforce_bill_rate` = ? WHERE `workforce_id` = ?;",[WorkForce.workforce_name, WorkForce.workforce_rate, WorkForce.job_role_id, WorkForce.workforce_contact, WorkForce.source_id, WorkForce.workforce_bill_rate, WorkForce.workforce_id], callback);
    },
    deleteWorkforce: function (id, callback) {
        return db.query("delete from workforces where workforce_id=?", [id], callback);
    },
    getAllWorkforceJobRoleSource: function (callback) {
        return db.query("SELECT * from job_roles as jr, workforces as w, sources as s WHERE jr.job_role_id=w.job_role_id and w.source_id=s.source_id", callback);
    }
};

module.exports = Workforces;