const express = require("express");
const bodyParser  = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine" , "ejs"); // EJS implementation into the project
//  along with this we need to make a new folder named 'views' and place the EJS file in
//    it for the view engine to work
// ---------------------------CONNECTING TO MONGOOSE----------------
mongoose.connect("mongodb://localhost:27017/toDoListDB");
// ---------------------SCHEMA FOR DB------------------------
const itemSchema = { // FOR SCHEMA REFERENCE
  name: String
};
// ------------------DATA IN DB-----------------
const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
  name: "Buy Food"
});

const item2 = new Item({
  name: "Cook Food"
});

const item3 = new Item({
  name: "Eat Food"
});

const defaultItems = [item1, item2, item3];
// ---------------------CRUD---------------------------
//--------------------HOME ROUTE---------------------
app.get("/", function(req, res){
  Item.find({}, function(err, foundItem){
    if(foundItems.length == 0){
      Item.insertMany(defaultItems, function(err){
        if(err){
          console.log(err);
        }else{
          console.log("Successfully updated.");
        }
      });
      res.redirect("/");
    }else{

    res.render("list" , {listTitle: "Today" , newListItems: foundItems}); // setting the EJS tag to the variable.
    }//  and rendering the EJS file by mentioning the first parameter as the name of the file.
});

app.post("/" , function(req, res){
  let item  = req.body.newItem;
  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    if(item != "")
      items.push(item);
    res.redirect("/");
  }
});
// ------------------------ABOUT ROUTE-----------------
app.get("/about" , function(req, res){
  res.render("about");
});

// ------------------------WORK ROUTE---------------------
app.get("/work" , function(req,res){
  res.render("list" , {listTitle: "Work List" , newListItems: workItems});
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
