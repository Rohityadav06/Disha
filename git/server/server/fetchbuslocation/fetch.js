//import db_connection
//db_connection.js file exporting json object
//getConnection is the key
//getConnection key return connection object
var conn = require("../config/db_connection");
//get the connection object
var connection = conn.getConnection();
//connect to database
connection.connect();
//import express module
var express = require("express");
//create the router instance
//router instance used to create the modules
var router = express.Router();
//where "router" object used to create the module

var url= require("url");
var http= require("http");


//create the Rest API
router.get("/",(req,res)=>{
var obj= url.parse(req.url,true).query;
var busNo= obj.busNo;
    connection.query("select * from bus"+busNo+" ",
                        (err,array,fields)=>{
        res.send(array);
       
    });
});
//export module
module.exports = router;


