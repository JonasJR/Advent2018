var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var day1Router = require('./routes/day1');
var day2Router = require('./routes/day2');
//var day3Router = require('./routes/day3');
//var day4Router = require('./routes/day4');
//var day5Router = require('./routes/day5');
//var day6Router = require('./routes/day6');
//var day7Router = require('./routes/day7');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/day1', day1Router);
app.use('/day2', day2Router);
//app.use('/day3', day3Router);
//app.use('/day4', day4Router);
//app.use('/day5', day5Router);
//app.use('/day6', day6Router);
//app.use('/day7', day7Router);

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
