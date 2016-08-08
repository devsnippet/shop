var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.render('index', {
		'title': 'Shop'
	});	

});

router.get('/product', function(req, res, next) {
	res.render('index', {
		'title': 'Shop'
	});

});

router.get('/admin/add', function(req, res, next) {
	res.render('admin', {
		'title': 'Admin panel'
	});

});

module.exports = router;