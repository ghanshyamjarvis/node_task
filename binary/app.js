
var express = require ('express');
var app = express();
var routes = require("./api/routes/index")

app.use("/api",routes);


app.get('/',function (req,res)
{
  res
    .status(200)
    .send("message")
});



  app.listen(3000, function ()
{
console.log("connected At 3000 Port")
});

/*

var express =require ('express')
var app =express()
var path = require ('path')

app.use(express.static(path.join(__dirname)))

app.get('/',function (req,res)
{
  console.log(req,url)
  res.status(200).sendFile(path.join("__dirname","index.html"))

});



app.listen(3000,function ()
{
  console.log("3000")
})*/
/*
var express =require ('express')
var app = express()
var path = require('path')

app.use(express.static(path.join(__dirname)))


app.get('/', function (req , res) {
  res
    .status(200)
    .sendFile(path.join(__dirname,"index.html"))
});


app.listen(3000,function ()
{
  console.log("3000")
})

*/
