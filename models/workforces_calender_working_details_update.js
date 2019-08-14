var db = require('../dbconnection');

var WorkForcesWorkingDetailsUpdateByDate = {

    workforcesCalenderWorkingDetailsUpdateById: function (idClientAndHours, callback) {
        console.log(idClientAndHours);

        // return db.query("SELECT * from clients_workforces cw, workforces_working_details ww where cw.workforce_id=? and ww.work_date=? and ww.client_workforce_id=cw.client_workforce_id", [idAndDate.workforce_id,idAndDate.work_date], callback);   
        return db.query("UPDATE workforces_working_details as wwd JOIN clients_workforces as cw on (wwd.client_workforce_id=cw.client_workforce_id) set work_hours=? ,cw.client_id=? WHERE workforce_work_id=?", [idClientAndHours.work_hours, idClientAndHours.client_id, idClientAndHours.workforce_work_id], callback);
    }
};

module.exports = WorkForcesWorkingDetailsUpdateByDate;