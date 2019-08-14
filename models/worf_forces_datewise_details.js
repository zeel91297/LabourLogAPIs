var db = require('../dbconnection');

var WorkForcesWorkingDetailsByDate = {
  
    getWorkForcesCalenderDetailsByIdAndDate: function (idAndDate, callback) {
        console.log(idAndDate);

        return db.query("SELECT * from clients_workforces cw, workforces_working_details ww where cw.workforce_id=? and ww.work_date=? and ww.client_workforce_id=cw.client_workforce_id", [idAndDate.workforce_id,idAndDate.work_date], callback);   
    }
};

module.exports = WorkForcesWorkingDetailsByDate;