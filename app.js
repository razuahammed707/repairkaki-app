const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose")
require('dotenv').config()
const passport=require("passport")
var cors = require('cors')
const app = express();

app.use(cors());

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const partnerRouter= require("./routes/partner/partnerIndex");


//passport
require("./auth/passport")(passport)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.use(passport.initialize());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client/build')));


app.use('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

if(process.env.NODE_ENV="production"){

  app.get("*",(req,res,next)=>{
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  })
  
}




//Partner Route Setup
app.use("/v1/partner",partnerRouter)
app.use('/users', usersRouter);
app.use("/",indexRouter)
//Database connection
mongoose.connect(process.env.DB_HOST,{ useNewUrlParser: true },(err)=>{
  if(err) throw err;
  console.log("Database connected")
})



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
