var db = require('../dbconnection');

var Clientworkforces =
{
    addClientwithworkForces : function(clientWorkforces , callback){
        return db.query("INSERT INTO `clients_workforces`(`client_workforce_id`, `workforce_id`, `client_id`) VALUES(?, ?, ?);",
        [ null, clientWorkforces.workforce_id, clientWorkforces.client_id], callback);
    },
    deleteClientworkforcesById: function(id , callback){
        return db.query("DELETE FROM `clients_workforces` WHERE client_workforce_id=?",[id], callback);
     },
    updateClientwithworkForces : function(id,clientWorkforces,callback){
        return db.query("UPDATE `clients_workforces` SET `workforce_id`=?, `client_id`=? Where client_workforce_id=?",[clientWorkforces.workforce_id,clientWorkforces.client_id,id],callback);
    }

};

module.exports = Clientworkforces;