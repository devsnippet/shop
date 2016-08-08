var express = require('express');
var configs = require('./configs/config');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var api = require('./routes/api');

var app = express();
console.log('Express initialized!');

app.use(favicon(__dirname + '/public/images/favicon.ico'));

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
console.log('Jade initilaized!');

var http = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	console.log(ip);
	var err = new Error('Not found.');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler, will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);

		res.render('error');
	});
}

http.listen(configs.server);
console.log('Connected to the port 3000!');

/*var io = require('./socket')(http, conn);
app.set('io', io);*/