var request = require('request');
var querystring = require('querystring');

var server = require('http').createServer();
var io = require('socket.io')(server);

server.listen(3000, function() {
	return console.log('listening for clients on 3000');
});

io.on('connection', function(socket) {
	console.log('connected on 3000');

	socket.on('mouselocation', function(postData) {
        postData['time']=(new Date().getTime()/1000)
		request.post({
			uri: "https://yourcloudurl.here/datafeed/input/streamname",
			headers: {'content-type': 'application/x-www-form-urlencoded', 'Possible-Crypto-Key': 'Krypt0k3y'},
			body: querystring.stringify(postData)
		}, function(err, res, body){
			console.log(body);
			console.log(res.statusCode);
		});
	});
});
