var db = require('../dbconnection');

var clientContactUpdateByClientId = {

    clientContactUpdateById: function (clientIdAndContact, callback) {
        console.log(clientIdAndContact);

        // return db.query("SELECT * from clients_workforces cw, workforces_working_details ww where cw.workforce_id=? and ww.work_date=? and ww.client_workforce_id=cw.client_workforce_id", [idAndDate.workforce_id,idAndDate.work_date], callback);   
        return db.query("UPDATE clients set client_contact=? WHERE client_id=?", [clientIdAndContact.client_contact, clientIdAndContact.client_id], callback);
    }
};

module.exports = clientContactUpdateByClientId;