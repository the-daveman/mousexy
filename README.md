mousexy
=======

a simple html5 webapp that uses a canvas and socket.io+nodejs to simulate uploading of sensor data to a cloud-based datastream

requires the following node modules to be installed: request querystring socket.io

configuration:
[server]
set the stream url in server.js::uri
set the optional crypto key keyname:value pair in server.js::headers if required for your cloud service

[client]
set the hostname:port of the server if it is not the default (localhost:3000) in index.htm which is currently hosting the socket.io js lib, as well as below in io.connect('http://127.0.0.1:3000') in order to open the websocket for data communications
