//express server with database

//test that db is connected to express server
//step 1: in terminal: run 'node index.js'
//step 2: in your browser: open 'localhost:3000/search'
//end connection in terminal with 'CTRL + C'

const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const app = express(); //run server

app.listen(3000, () => {
  console.log("Server is listening on port: 3000");
});

var con = mysql.createConnection({ //sql connection
    host: "<HOST>",
    user: "<USER>",
    password: "<PASSWORD>"
});

con.connect(function(err) { //connect to rds
    if (err) throw err;
    console.log("Connected!"); //make sure to end connection in command line when done, <50% free space left
    //con.end(); 
});

app.get('/search', (req, res) => { //GET function; we can use POST, etc
  con.connect(function(err) {
    con.query('USE <DATABASE>');
    con.query('SELECT * FROM <TABLE>', function(err, result, fields) { //
        if (err) res.send(err);
        if (result) res.send(result);
    });
  });
});

module.exports = router;