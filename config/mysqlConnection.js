const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'B1smillah92',
    database: 'crud_db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Mysql Connected...');
    console.log('Mysql connection threadId :'+connection.threadId);
})

module.exports = {connection};
