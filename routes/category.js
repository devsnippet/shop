var express = require('express');
var router = express.Router();
var db = require('./../server/db');

// GET ---------------------------------------------------------------
router.get('/', function(req, res) {
    db.getAllCategory(function(err, data) {
        res.send(data);
    });
});

router.get('/:id', function(req, res) {
    db.getCategoryById(req.params.id, function(err, data) {
        res.send(data);
    });
});

router.get('/:id/product', function(req, res) {
    db.getAllProduct(req.params.id, function(err, data) {
        res.send(data);
    });
});

router.get('/:id/product/:productId', function(req, res) {
    db.getProductById(req.params.id, req.params.productId, function(err, data) {
        res.send(data);
    });
});

router.get('/1/attribute', function(req, res) {
    db.getAllAttribute(function(err, data) {
        res.send(data);
    });
});

router.get('/1/attribute-type', function(req, res) {
    db.getAllAttributeType(function(err, data) {
        res.send(data);
    });
});

// POST ---------------------------------------------------------------
router.post('/', function(req, res) {
    db.addCategory(req.body);
    res.json(req.body);
})

router.post('/:id/product', function(req, res, next) {
    db.addProduct(req.params.id, req.body);
    res.json(req.body);
});

router.post('/:id/attribute', function(req, res) {
    db.addAttribute(req.params.id, req.body);
    res.json(req.body);
});

router.post('/attribute-type', function(req, res) {
    db.addAttributeType(req.body);
    res.json(req.body);
});

// DELETE ---------------------------------------------------------------
router.delete('/:id', function (req, res){
    res.send('Delete');
});

router.delete('/:id/product/:productId', function (req, res){
    res.send('Delete');
});

router.delete('/:id/attribute/:attribute-id', function (req, res){
    res.send('Delete');
});

/*
// PUT ---------------------------------------------------------------
router.put('/api/articles/:id', function (req, res){
    res.send('This is not implemented now');
});

*/

module.exports = router;