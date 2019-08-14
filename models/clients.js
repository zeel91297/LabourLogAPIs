var db = require('../dbconnection');

var clients = {
    getAllClients: function (callback) {
        return db.query("select * from clients", callback);
    },
    getClientById: function (id, callback) {
        //console.log(id);
        return db.query("SELECT * FROM `clients` WHERE `client_id`=?", [id], callback);
    },
    addClient: function (Client, callback) 
    {
        console.log(Client);
        //return db.query("INSERT INTO `workforces` ( `workforce_name`, `workforce_rate`, `job_role_id`, `workforce_contact`, `source_id`, `workforce_bill_rate`,) VALUES (?, ?, ?, ?, ?, ?);", [null, WorkForce.workforce_name, WorkForce.workforce_rate, WorkForce.job_role_id, WorkForce.workforce_contact, WorkForce.source_id, WorkForce.workforce_bill_rate, null]);
        return db.query('insert into clients set ?', [Client], callback);
    },
    editClient: function (Client, id, callback) {
        return db.query('update clients set ? where client_id=?', [Client, id], callback);
        //return db.query("UPDATE `workforces` SET `workforce_name` = ?, `workforce_rate` = '?', `job_role_id` = ?,`workforce_contact` = ?, `workforce_source_id` = ?,`workforce_bill_rate` = ? WHERE `workforce_id` = ?;",[WorkForce.workforce_name, WorkForce.workforce_rate, WorkForce.job_role_id, WorkForce.workforce_contact, WorkForce.source_id, WorkForce.workforce_bill_rate, WorkForce.workforce_id], callback);
    },
    deleteClient: function (id, callback) 
    {
        return db.query("delete from clients where client_id=?", [id], callback);
    }
};

module.exports = clients;