var mysql = require('mysql');

/* var connection = mysql.createPool({
    user: 'root',
    password: '',
    database: 'labour_log'
}); */

/* var connection = mysql.createPool({
    host: 'labourlogdb.mysql.database.azure.com',
    user: 'labour@labourlogdb',
    password: 'Workforce@2019',
    database: 'public'
}); */

var connection = mysql.createPool({
    host: 'remotemysql.com',
    user: 'Mf4QbWGM42',
    password: 'dF0bcHUntf',
    database: 'Mf4QbWGM42',
    port: 3306
});

module.exports = connection;