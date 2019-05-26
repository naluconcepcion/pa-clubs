// taken from project1-sample-project from backend project and modified

// loading in config variable
const config = require('./config.js');

// setting up express
const express = require("express");
const app = express();
const port = 8888;

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
// ------------------------------------- Database KNEX queries -----------------------------------
// create the table if it doesn't exist
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
// create clubs entry in table (this should require authentication of some sort)
app.post("/", function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // allowing for local testing from frontend to backend pulling
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

// return a JSON list of all clubs
app.get("/database", function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // allowing for local testing from frontend to backend pulling
  knex.select().table("clubs").then(function(database) {
    res.json(database)
  })
});
// begin listening
app.listen(process.env.PORT || port, function() {
  console.log(`App listening on port ${port}!`)
});
