var conn = require('./dbConnect');

function db() {
    console.log(err);
    conn.close();
}

// GET
db.getAllProduct = function (callback) {
    conn.query('SELECT product.id, product.title, product.description, category.title as category ' +
        'FROM product, category ' +
        'WHERE product.category_id = category.id', callback);

        //var result = products.map(function(product) {
        //    conn.query('SELECT attribute_value.attribute_name_title, attribute_value.value, attribute_value.title ' +
        //        'FROM attribute_value ' +
        //        'WHERE attribute_value.product_id = ' + product.id, function (err, attributes) {
        //
        //        if (err) throw err;
        //
        //        product.attributes = attributes;
        //
        //    });
        //    return product.attributes = attributes;;
        //});
        //
        //console.log(result);



        //console.log(products);
       // callback(products);
}

db.getAllCategoryProduct = function (id, callback) {
    conn.query('SELECT * FROM product WHERE category_id =' + id, callback);
}

db.getProductById = function (id, productid, callback) {
    conn.query("SELECT * FROM product WHERE id = " + productid + " and category_id = " + id, callback);
}

// ADD
db.addProduct = function (categoryId, product) {
    conn.query("INSERT INTO product (category_id, title, description)" +
        "VALUES ('" + categoryId + "', '" + product.title + "', '" + product.desc + "')", function (err, result) {

        if (err) throw err;

        for (item in product.type) {
            let productId = result.insertId;
            let attribute_type = product.type[item].title;
            let attribute_name = product.attribute[item].title;
            let attribute_value = product.attrvalue[item];

            conn.query("INSERT INTO attribute_value (product_id, title, attribute_name_title, value)" +
                "VALUES ('" + productId + "', '" + attribute_type + "', '" + attribute_name + "', '" +
                attribute_value + "')", function (err, result) {

                if (err) throw err;
            });
        }

    });
}

module.exports = db;