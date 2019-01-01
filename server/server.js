/**
 * The server modules is responsible to start a DEV server
 * and to proxy the resources/, test-resources/, data/ URLs
 * to the proper URLs:
 * 
 * resources/ => https://sapui5.hana.ondemand.com/resources/
 * test-resources/ => https://sapui5.hana.ondemand.com/test-resources/
 * data/ => http://services.odata.org/V2/OData/OData.svc/
 */

'use strict';

var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use("/resources", proxy({target: "https://sapui5.hana.ondemand.com/resources/", pathRewrite: {
	'^/resources/' : ''
}, changeOrigin: true}));
app.use("/test-resources", proxy({target: "https://sapui5.hana.ondemand.com/test-resources/", pathRewrite: {
	'^/test-resources/' : ''
}, changeOrigin: true}));
app.use("/data", proxy({target: "https://services.odata.org/V2/OData/OData.svc/", pathRewrite: {
	'^/data/' : ''
}, changeOrigin: true}));

app.use(express.static('webapp'));

var port = 3000;
app.listen(port, function () {
	console.log('Server listening on port ' + port + '\n');
});
