/*
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
*/


/*

const  http = require ('http');
const  fs =require ('fs');

http.createServer (function (request,response)

{
fs.readFile(',/index.html',function (error,data)
{
  if (error)
  {
    response.writeHead(404);
    response.write("Page not Found")
  }
  else {
    response.writeHead(200,{'content-Type':'text/html'});
    response.write('data');
    response.end()
  }
})
}).listen(5000);
console.log("Server Is Connected SuccessFul at Port 8080");*/
