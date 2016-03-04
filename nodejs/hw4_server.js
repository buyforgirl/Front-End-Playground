var server = require("./hw4");
var router = require("./hw4_route");
var requestHandlers = require('./hw4_requestHandles');

var handle = {};
handle['/'] = requestHandlers.index;
handle['/matrix'] = requestHandlers.index;

server.start_server(router.route, handle);