var conn = require("../config/db_connection");
var connection = conn.getConnection();
connection.connect();
var express = require("express");
var router = express.Router();
router.post("/",(req,res)=>{
 busNumber= req.body.busNo;
 lat= req.body.lat;
  lang= req.body.lng;
 
console.log(req);

connection.query("update bus"+busNumber+" set lat='"+lat+"', lng='"+lang+"'",(err,result)=>{
        if(err){
            res.send({"update":"fail"});
        }else{
            res.send({"update":"success"});
        }
    });
});
//export the router
module.exports = router;






