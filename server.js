var express = require("express");

server = express();

server.use(express.static("Bootstrap_Exercise2")); //web root

server.get("/", function(req, res){
    res.send("Hello");
})

server.listen(8080, function(){
    console.log("Server id running at port: 8080");
})