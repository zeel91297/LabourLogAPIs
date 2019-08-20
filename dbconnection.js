var mysql = require('mysql');

/* var connection = mysql.createPool({
    user: 'root',
    password: '',
    database: 'labour_log'
}); */

var connection = mysql.createPool({
    host: 'labourlogdb.mysql.database.azure.com',
    user: 'labour@labourlogdb',
    password: 'Workforce@2019',
    database: 'public'
});

module.exports = connection;