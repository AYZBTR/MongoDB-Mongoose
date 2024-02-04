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

//2.Reading


module.exports = router;
