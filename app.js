var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var WorkForceRouter = require('./routes/workforces_routes');
var Sourcesrouter = require('./routes/Sources_routes');
var Clientworkforce = require('./routes/client_workforce_routes')
var JobRolesRouter = require('./routes/jobroles_routes');
var ClientRouter = require('./routes/client_routes');
var ClientInvoiceGenerate = require('./routes/ClientInvoiceGenerate');
var WorkForcesWorkingDetailsRouter = require('./routes/work_forces_working_details_routes');
var workForceCalenderDetailsByIdandDate = require('./routes/workforce_date_wise_record');
var WorkforceSourceJob = require('./routes/workforceSourceRoutes');
var WorkForceWorkUpdate = require('./routes/WorkForceWorkUpdate');
var clientNameUpdate = require('./routes/clientNameUpdate');
var clientEmailIdUpdate = require('./routes/clientEmailIdUpdate');
var clientContactNoUpdate = require('./routes/clientContactNoUpdate');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/workforces', WorkForceRouter);
app.use('/Sources', Sourcesrouter);
app.use('/clientworkforce', Clientworkforce);
app.use('/jobroles', JobRolesRouter);
app.use('/clients', ClientRouter);
// app.use('/workForceWorkingDetails', WorkForceWorkingDetailsRouter);
app.use('/Workforcesworkingdetails', WorkForcesWorkingDetailsRouter);
app.use('/WorkforceSourceJob', WorkforceSourceJob);

app.use('/ClientInvoiceGenerate', ClientInvoiceGenerate);
app.use('/workForceCalenderDetailsByIdandDate', workForceCalenderDetailsByIdandDate);
app.use('/WorkForceWorkUpdate', WorkForceWorkUpdate);
app.use('/clientNameUpdate', clientNameUpdate);
app.use('/clientEmailIdUpdate', clientEmailIdUpdate);
app.use('/clientContactNoUpdate', clientContactNoUpdate);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
/* // error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //console.log(err);

  res.render('error');
}); */

module.exports = app;


