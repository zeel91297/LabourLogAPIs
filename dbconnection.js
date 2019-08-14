var mysql = require('mysql');

var connection = mysql.createPool({
    user: 'root',
    password: '',
    database: 'labour_log'
});

module.exports = connection;