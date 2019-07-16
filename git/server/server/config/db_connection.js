var obj = require("./db_properties");
var mysql = require("mysql");
module.exports = {
    getConnection   :   ()=>{
        return mysql.createConnection({
            host:obj.host,
            user:obj.user,
            password:obj.password,
            database:obj.database
        });
    }
};