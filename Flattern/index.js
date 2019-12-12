/*

const http = require('http'); // Create http Server

const fs = require ('fs'); // Rendering Using File System


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

var express = require ('express');
var app = express();
var path =require('path')

    app.get('/',function (request,response)
    {
      console.log(request,url)
      response.status(200).sendFile(path.join(__dirname,'index.html'))

    });

app.listen(4000,function () {
    console.log("Listing at port 4000")
});