var db = require('../dbconnection');

var clientNameUpdateByClientId = {

    clientNameUpdateById: function (clientIdAndName, callback) {
        console.log(clientIdAndName);

        // return db.query("SELECT * from clients_workforces cw, workforces_working_details ww where cw.workforce_id=? and ww.work_date=? and ww.client_workforce_id=cw.client_workforce_id", [idAndDate.workforce_id,idAndDate.work_date], callback);   
        return db.query("UPDATE clients set client_name=? WHERE client_id=?", [clientIdAndName.client_name, clientIdAndName.client_id], callback);
    }
};

module.exports = clientNameUpdateByClientId;