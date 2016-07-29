var configs = require('./../configs/config');
var mysql = require("mysql");
var conn = mysql.createConnection(configs.database);
conn.connect();

function db() {
    console.log(err);
    conn.close();
}

// GET
db.getAllCategory = function(callback) {
    conn.query('SELECT * FROM category', callback);
}

db.getAllProduct = function(id, callback) {
    conn.query('SELECT * FROM product WHERE category_id =' + id, callback);
}

db.getAllAttribute = function(callback) {
    conn.query('SELECT * FROM attribute_name', callback);
}

db.getAllAttributeType = function(callback) {
    conn.query('SELECT * FROM attribute_type', callback);
}

db.getCategoryById = function(id, callback) {
    conn.query('SELECT * FROM category WHERE id =' + id, callback);
}

db.getProductById = function(id, productid, callback) {
    conn.query("SELECT * FROM product WHERE id = " + productid + " and category_id = " + id, callback);
}

// ADD
db.addProduct = function(categoryId, product) {
    console.log(product);
    conn.query("INSERT INTO product (category_id, title, description)" +
        "VALUES ('"+ categoryId +"', '"+ product.title +"', '"+ product.desc +"')");
}

db.addAttributeType = function(attributeType) {
    conn.query("INSERT INTO attribute_type (title)" +
        "VALUES ('"+ attributeType.title +"')");
}

db.addAttribute = function(categoryId, attribute) {
    conn.query("INSERT INTO attribute_name (title)" +
        "VALUES ('"+ attribute.title +"')");

    conn.query("INSERT INTO category_attribute (category_id, attribute_name_title)" +
        "VALUES ('"+ categoryId +"', '"+ attribute.title +"');");
}

db.addCategory = function(category) {
    if(category.parentId) {
        conn.query("INSERT INTO category (title, parent_id)" +
            "VALUES ('"+ category.title +"','"+ category.parentId +"')");
    }
    else {
        conn.query("INSERT INTO category (title)" +
            "VALUES ('"+ category.title +"')");
    }
}


module.exports = db;