/**
 * Created by ZHON020 on 2016/5/11.
 */
var express = require('express');
var ejs = require('ejs');
var path = require('path');

var routes=require('./routes/index');
var app = express();

app.set('views', path.join(__dirname, 'views/html'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use('/',routes);
//app.get('/', function (req, res) {
//    res.send('Hello World!');
//});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    err.abcdefg="asdfrrrrrrrrrrrr!!!!!";
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});