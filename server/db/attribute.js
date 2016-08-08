var conn = require('./dbConnect');

function db() {
    console.log(err);
    conn.close();
}

// GET
db.getAllCategoryAttribute = function (categoryId, callback) {
    conn.query('SELECT * FROM attribute_name', callback);
}

// ADD
db.addAttribute = function (categoryId, attribute) {
    conn.query("INSERT INTO attribute_name (title)" +
        "VALUES ('" + attribute.title + "')");

    conn.query("INSERT INTO category_attribute (category_id, attribute_name_title)" +
        "VALUES ('" + categoryId + "', '" + attribute.title + "');");
}


module.exports = db;