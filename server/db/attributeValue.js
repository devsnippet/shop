var conn = require('./dbConnect');

function db() {
    console.log(err);
    conn.close();
}

// GET
db.getAllAttributeValue = function (callback) {
    conn.query('SELECT * FROM attribute_value', callback);
}


module.exports = db;