const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true }));
// app.use(express.static('public'));

var items = [];
var example = "working";


app.get("/",function(req,res){
    res.render("list",{ejs : items});
});

app.post("/",function(req,res){
    var item = req.body.ejs1;
    items.push(item);
    res.redirect('/');
});



app.listen(4000,function(){
    console.log("server is started");
});

//find error