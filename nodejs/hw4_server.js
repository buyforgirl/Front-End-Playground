var server = require("./hw4");
var router = require("./hw4_route")

server.start_server(router.route);