var conn = require('./dbConnect');

function db() {
    console.log(err);
    conn.close();
}

// GET
db.getAllAttributeType = function (callback) {
    conn.query('SELECT * FROM attribute_type', callback);
}

// ADD
db.addAttributeType = function (attributeType) {
    conn.query("INSERT INTO attribute_type (title)" +
        "VALUES ('" + attributeType.title + "')");
}


module.exports = db;