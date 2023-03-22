const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + '/date.js');
var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];
app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/",function (req, res) {
    
    day = date.getDay()
    res.render("list", {listTitle:day, newItems:items});
  });

app.post("/", function (req, res) {
    let item = req.body.newItem;
    if (req.body.button ==="Work"){
        workItems.push(item);
        res.redirect("/work")
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
  });

app.get("/work", function (req, res) {
        res.render('list', {listTitle:"Work", newItems:workItems});
    });

app.get("/about", function (req, res) {
    res.render("about");
  });

app.listen(3000, function () {
    console.log("Server is up an running on port 3000");
  });