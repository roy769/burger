//setup mysql connection
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL)
{ connection = mysql.createConnection(process.env.JAWSDB_URL)
}  else
  {
    connection = mysql.createConnection({

    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
}
//make connection
connection.connect(function(err)
{
  if (err)
  {
    console.error("err connection: " + err.stack);
    return;
  }
  console.log("done good, son " + connection.threadId);
});

//export connection for ORM
module.exports = connection;
