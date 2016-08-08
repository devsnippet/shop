var conn = require('./dbConnect');

function db() {
    console.log(err);
    conn.close();
}

// GET
db.getAllCategory = function (callback) {
    conn.query('SELECT * FROM category', callback);
}

db.getCategoryById = function (id, callback) {
    conn.query('SELECT * FROM category WHERE id =' + id, callback);
}

// ADD
db.addCategory = function (category) {
    if (category.parentId) {
        conn.query("INSERT INTO category (title, parent_id)" +
            "VALUES ('" + category.title + "','" + category.parentId + "')");
    }
    else {
        conn.query("INSERT INTO category (title)" +
            "VALUES ('" + category.title + "')");
    }
}


module.exports = db;