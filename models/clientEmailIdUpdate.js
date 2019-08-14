var db = require('../dbconnection');

var clientEmailIdUpdateByClientId = {

    clientEmailUpdateById: function (clientIdAndEmailId, callback) {
        console.log(clientIdAndEmailId);

        // return db.query("SELECT * from clients_workforces cw, workforces_working_details ww where cw.workforce_id=? and ww.work_date=? and ww.client_workforce_id=cw.client_workforce_id", [idAndDate.workforce_id,idAndDate.work_date], callback);   
        return db.query("UPDATE clients set client_email=? WHERE client_id=?", [clientIdAndEmailId.client_email, clientIdAndEmailId.client_id], callback);
    }
};

module.exports = clientEmailIdUpdateByClientId;