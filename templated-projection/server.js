


const http = require('http'); // Create http Server

const fs = require ('fs'); // Rendering Using File System

//const mm =require ('./index.html') only for test is file path is ok or not

http.createServer(function (request,response)
{
  fs.readFile('./index.html',function (err,data){
    if (err){
      response.writeHead(404)
      response.write("Page Not Found")
    }
    else {
      response.writeHead(200,{'Content-Type':'text/html'});
      response.write(data);
      response.end()
    }
  })
}).listen(8000);
console.log("Server Connected Successfully at port 8000");

/*
var http = require('http');
var fs = require('fs');

const PORT=8080;

fs.readFile('./index.html', function (err, html) {

  if (err) throw err;

  http.createServer(function(request, response) {
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
  }).listen(PORT);
  console.log("port",PORT)
});*/
