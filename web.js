var gzippo = require('gzippo');
var express = require('express');

// Start app as an express-app on a particular port
var app = express();
var port = process.env.PORT || 5000;
app.listen(port);
console.log('Listening at port %d', port);

// Setup the satic content using gzippo
app.use(gzippo.staticGzip("" + __dirname));

