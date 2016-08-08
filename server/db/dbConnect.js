var configs = require('./../../configs/config');
var mysql = require("mysql");
var conn = mysql.createConnection(configs.database);
conn.connect();

module.exports = conn;