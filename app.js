
const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true }));
app.use(express.static('public'));

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

// app.post("/delete", (req, res) => {
//     const id = parseInt(req.body.id);
//     tasks = tasks.filter(t => t.id !== id);
//     error = "";
//     res.redirect("/");
// });



app.listen(4000,function(){
    console.log("server is started");
});

 
