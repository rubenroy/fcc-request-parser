var express = require("express")
var app = express()
var port = process.env.PORT || 8000;

app.get('/', function(req, res) {
	remote_ip = req.headers['x-forwarded-for']; 
	var regexp = /\(([^)]+)\)/g;
	var match = regexp.exec(req.headers['user-agent']);
	os = match[1];
	language = req.headers['accept-language']
	res.json({
		"ipaddress": remote_ip,
		"language": language,
		"software": os
	});
});

app.listen(port, function() {
    console.log("Server started on port ", port);
});
