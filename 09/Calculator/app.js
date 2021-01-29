var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/', function(req, res) {
	let num1 = req.body.num1;
	let num2 = req.body.num2;
	let operation = req.body.operation;
	let x = parseFloat(num1);
	let y = parseFloat(num2);
	let result;
	let error = false;
	if(operation =="add") {
		result = x + y;
	}
	else if(operation =="sub") {
		result = x - y;
	}
	else if(operation =="mul") {
		result = x * y;
	}
	else if(operation == "div") {
		if (y == 0) { 
			error = true
		} else {
			result = x / y;
		}
	}
	else {
		error = true;
	}

	if(error == true) {
		console.log("error occured");
		res.json({ response: "Error occured" });
	} else {
		res.json({ response: result });
	}

});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
