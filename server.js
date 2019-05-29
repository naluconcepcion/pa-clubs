// boostrapped from project1-sample-project from backend project and modified

// loading in config variable
const config = require('./config.js');

// setting up express
const express = require("express");
const app = express();
const port = 8888;

// taken from https://medium.com/@alexishevia/using-cors-in-express-cac7e29b005b
// setting up cors to spare the headaches
// @LIV we should fix this later or write about it in the security audit
var cors = require('cors');
app.use(cors());

// path matching
const path = require('path')

// setting up knex
var knex = require("knex")({
  client: "pg",
  connection: config.database
});

// setting up bodyparser, from: https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

// setting up postgres
const {
  Client
} = require("pg");

const client = new Client();
async function connect() {
  await client.connect()
};

// frontend rendering, taken from https://medium.com/@chloechong.us/how-to-deploy-a-create-react-app-with-an-express-backend-to-heroku-32decfee6d18
app.use(express.static(path.join(__dirname, 'frontend/build')))

// ------------------------------------- KNEX setup -----------------------------------
// Nalu
// create the clubs table if it doesn't exist
knex.schema.hasTable("clubs").then(function(exists) {
  if (!exists) {
    return knex.schema.createTable("clubs", function(table) {
      console.log("created clubs table");
      table.increments("id"); // creates "id" column on table
      table.string("club_name");
      table.string("student_leader");
      table.string("time");
      table.string("location");
      table.string("advisor");
      table.string("description");
    });
  }
});

// Nalu
// create the users table if it doesn't exist (where do we hash the password?)
knex.schema.hasTable("users").then(function(exists) {
  if(!exists) {
    return knex.schema.createTable("users", function(table) {
      console.log("created users table");
      table.increments("id");
      table.string("username");
      table.string("password");
      table.string("full_name");
      table.boolean("superuser"); // ideally we could set this by actually accessing andover credentials
      table.boolean("is_leader"); // true if  'full_name' is in the 'student_leader' column of 'clubs'
    });
  }
});

// ------------------------------------- POST/GET requests -----------------------------------
// Nalu
// create clubs entry in table
app.post("/", function(req, res) {
  knex("clubs").insert({
    club_name: req.body['club_name'],
    student_leader: req.body['password'],
    time: req.body['time'],
    location: req.body['location'],
    advisor: req.body['advisor'],
    description: req.body['description']
  }).then(function() {
    console.log("hits here")
    res.status(200).send("successfully created entry in clubs table!");
  })
});

// Liv
// allow any current student leaders to modify their own entry
app.post("/update", function(req, res) {
  knex("clubs").where(
    {
      "student_leader": "Nalu Concepcion",
      "club_name": req.body.old_club_name
    }).update({
      "club_name": req.body.new_club_name,
      "time": req.body.time,
      "location": req.body.location
    }).then(function(data){
        res.status(200).send("yeah, this works")
      })
    });
// Liv
app.get("/update", function(req, res){
  knex.select("club_name").from("clubs").where({
    "student_leader": "Nalu Concepcion"
  }).then(function(data){
    res.json(data);
  })
});

// Liv
// create a new entry in the users table; make sure to check for whether or not username already is taken
app.post("/signup", function(req, res) {
//this SHOULD only work if the person signing up has access to an andover email.
//SIMPLIFY THIS TMRW
  var str = req.body.username;
  var array = str.split("@");
  if (array[1] == "andover.edu"){
    knex.select("username").from("users").where({
      "username": req.body.username
    }).then(function(username){
      if (username.length == 0){
        knex("users").insert({"username": req.body.username,
                              "password": req.body.password,
                              "full_name": req.body.full_name}).then(console.log(req.body.username));
        res.status(200).send("success!");
        res.redirect("/validate");
      } else {
        res.status(400).send("This user already exists.");
      }
    })
  } else {
    res.status(400).send("Sorry, this is not a valid PA email address.");
  }
  });
//Liv
app.get("/club-leaders", function(req, res){
})
//Liv
app.get("/validate", function(req, res){
  res.send("checkpoint")
});

// Nalu
// authenticate user, make sure to set the 'superuser' and 'is_leader' parameters appropriately
app.post("/login", function(req, res) {
  knex.select("password").from("users").where({
    "username": req.body.username,
    "password": req.body.password
  }).then(function(password) {
    console.log(password.length);
    if (password.length != 0) {
      res.status(200).send("user successfully logged in");
    } else {
      res.status(400).send("no user with that username/password combination");
    }
  });
});
// Nalu
// return a JSON list of all clubs
app.get("/database", function(req, res) {
  knex.select().table("clubs").then(function(database) {
    res.json(database);
  })
});

// Nalu
// return a JSON list of all users
app.get("/users", function(req, res) {
  knex.select().table("users").then(function(db) {
    res.json(db);
  })
});

// begin listening
app.listen(process.env.PORT || port, function() {
  console.log(`App listening on port ${port}!`)
});
