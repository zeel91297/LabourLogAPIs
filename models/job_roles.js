var db = require('../dbconnection');

var JobRoles = {
    getAllJobRoles: function (calllback) {
        return db.query("select * from job_roles", calllback);
    },
    getJobRolesById: function (id, calllback) {
        return db.query("select * from job_roles where job_role_id=?", [id], calllback);
    },
    addJobRoles: function (JobRole, calllback) {
        return db.query("insert into job_roles set ?", [JobRole], calllback);
    },
    editJobRole: function (JobRole, id, calllback) {
        return db.query('update job_roles set ? where job_role_id=?', [JobRole, id], calllback);
    },
    deleteJobRole: function (id, calllback) {
        return db.query('delete from job_roles where job_role_id=?', [id], calllback);
    }
};

module.exports = JobRoles;