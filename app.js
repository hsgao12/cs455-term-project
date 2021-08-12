const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const searchRouter = require('./routes/search');
const viewRouter = require('./routes/viewHistory');
const listingRouter = require('./routes/listing');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter);
app.use('/viewHistory', viewRouter);
app.use('/listing', listingRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('ui/build'));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect(
  'mongodb+srv://GKtest:GKtest@cluster0.cxexy.mongodb.net/SneakerTradingDB?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true },
  (req, res) => {
    console.log('Connected to mongodb database');
  }
);

module.exports = app;
