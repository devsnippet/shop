var express = require('express');
var router = express.Router();
var productDb = require('./../server/db/product');
var categoryDb = require('./../server/db/category');
var attributeDb = require('./../server/db/attribute');
var attributeTypeDb = require('./../server/db/attributeType');
var attributeValueDb = require('./../server/db/attributeValue');

// GET ---------------------------------------------------------------
router.get('/category/:id', function(req, res) {
    categoryDb.getCategoryById(req.params.id, function(err, data) {
        if (err) throw err;
        res.send(data);
    });
});

router.get('/category/:id/product', function(req, res) {
    productDb.getAllCategoryProduct(req.params.id, function(err, data) {
        if (err) throw err;
        res.send(data);
    });
});

router.get('/product', function(req, res) {
    productDb.getAllProduct(function(err, data) {
        if (err) throw err;
        res.send(data);
    });
});

router.get('/attribute-value', function(req, res) {
    attributeValueDb.getAllAttributeValue(function(err, data) {
        if (err) throw err;
        res.send(data);
    });
});

router.get('/category/:id/product/:productId', function(req, res) {
    productDb.getProductById(req.params.id, req.params.productId, function(err, data) {
        if (err) throw err;
        res.send(data);
    });
});

router.get('/category/:id/attribute', function(req, res) {  // most be /category/:id/attribute
    attributeDb.getAllCategoryAttribute(req.params.id, function(err, data) {
        if (err) throw err;
        res.send(data);
    });
});

router.get('/category', function(req, res) {
    categoryDb.getAllCategory(function(err, data) {
        if (err) throw err;
        res.send(data);
    });
});

router.get('/attribute-type', function(req, res) {
    attributeTypeDb.getAllAttributeType(function(err, data) {
        if (err) throw err;
        res.send(data);
    });
});

// POST ---------------------------------------------------------------
router.post('/category', function(req, res) {
    categoryDb.addCategory(req.body);
    res.json(req.body);
})

router.post('/category/:id/product', function(req, res, next) {
    productDb.addProduct(req.params.id, req.body);
    res.json(req.body);
});

router.post('/category/:id/attribute', function(req, res) {
    attributeDb.addAttribute(req.params.id, req.body);
    res.json(req.body);
});

router.post('/attribute-type', function(req, res) {
    attributeTypeDb.addAttributeType(req.body);
    res.json(req.body);
});

// DELETE ---------------------------------------------------------------
router.delete('/category/:id', function (req, res){
    res.send('Delete');
});

router.delete('/category/:id/product/:productId', function (req, res){
    res.send('Delete');
});

router.delete('/category/:id/attribute/:attribute-id', function (req, res){
    res.send('Delete');
});

/*
// PUT ---------------------------------------------------------------
router.put('/api/articles/:id', function (req, res){
    res.send('This is not implemented now');
});

*/

module.exports = router;