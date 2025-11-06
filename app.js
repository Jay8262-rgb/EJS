const express = require('express');

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let items = [];

app.get("/", function(req, res) {
    res.render("list", { ejs: items, showUpdate: false});
});

app.post("/", function(req, res) {
    const item = req.body.ejs1 ? req.body.ejs1.trim() : "" ;
    const priority = req.body.priority;
    if (item.length > 0) { 
        items.push({item, priority});
    } else {
        console.log("Enter a valid input value");
        return res.status(400).send("<h1>Plz insert valid data</h1>");
    }
    res.redirect("/");  
});

app.get("/edit/:id", function(req, res) {
  const EdId = req.params.id;
  const editValue = items[EdId];
  res.render("list", {ejs: items, editIndex: EdId, editValue: editValue, showUpdate: true });
});

app.post("/update/:id", function(req, res) {
  const id = req.params.id;
  const newValue = req.body.newValue.trim();
  const priority = req.body.priority;
  const color = req.body.color || "black";
  const font = req.body.font || "normal";
  const highlight = req.body.highlight || "transparent";
  if (newValue.length > 0) {
    
    items[id] = {item : newValue , priority , color, font, highlight};
  }else{
    console.log("enter the input value");
    return res.status(400).send("<h1>Plz enter a value");
  }
  res.redirect("/");
});



app.post("/delete/:id" , function(req, res){
  const StoredID = req.params.id;
  const delData = items[StoredID];
  console.log(delData);
  items.splice(delData, 1);
  res.redirect("/");  
});


app.listen(4004, function() {
    console.log('Server is started on http://localhost:4004');
});