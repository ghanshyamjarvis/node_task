/*
var express = require ('express')
var app =express()
var path = require('path')

app.use(express.static(path.join(__dirname)))

app.get('./',function (req,res)
{
  console.log(req,url);
  res.status(200).sendFile(__dirname,'index.js')
});

app.listen(4000,function ()
{
  console.log("Connected Successful at Port 4000")
});
*/
var express =require ('express');
var app =express();
var path =require('path');

app.get('/',function (req,res)
{
  console.log(req,url)
  res.status(200).sendFile(__dirname,'index.html')
});

app.listen(4000,function ()
{
console.log("4000 port connect")
});
