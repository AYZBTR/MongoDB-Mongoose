var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res) {
  res.render("index");
  
});

//1. Creating
//Creating user in Database using Mongodb/mongoose!
 router.get('/create', async function(req, res) {
  const createUser = await userModel.create({      
    username: "AYZBTR",    //inside this userMode.create always holds object.
    age: 21,   //we passed object according to our schema which we created before in users.js
    name: "Aayush Bhattarai"
  });
  res.send(createUser);
}); 

//2.Reading (find())
router.get('/allUsers', async function(req,res){
 let allUsers = await userModel.find();
 res.send(allUsers);
});

//a.Reading (findOne())
//findOne ==> helps to find particular users...
router.get('/find', async function(req,res){
  let allUsers = await userModel.findOne({username:"AYZBTR"});
  res.send(allUsers);
 });

 //3. Delete
 router.get('/delete', async function(req, res){
  let deletedUser = await userModel.findOneAndDelete({
    username:"AYZBTR"
  });
  res.send(deletedUser);
 });

module.exports = router;
