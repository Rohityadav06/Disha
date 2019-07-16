var express= require("express");
var bodyparser= require("body-parser")

var cors=require("cors")
var app= express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))

app.use(cors());



var fetch= require("./server/fetchbuslocation/fetch");
app.use("/fetch",fetch);

var update = require("./server/updateBusloaction/update");
app.use("/update",update);

app.listen(8080);
console.log("started at 8080")









