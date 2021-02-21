/* Create the audit table from the schema.sql file */
const mysql = require('mysql');
const databaseConnection = mysql.createConnection(process.env.LOCAL_DATABASE);
databaseConnection.connect();

/* Insert into the audit table */
// const queryOne = "INSERT INTO audit (name, action, date) VALUES ('joe', 'reported sales', '2008-11-11')";
// const queryTwo = "INSERT INTO audit (name, action, date) VALUES ('joe', 'reported sales', '2008-11-11 13:23:44')";
// const queryThree = "INSERT INTO audit (name, action, date) VALUES ('joe', 'reported sales', '2009-11-11 13:23:44')";
// databaseConnection.query(queryOne, function(err, res){});
// databaseConnection.query(queryTwo, function(err, res){});
// databaseConnection.query(queryThree, function(err, res){});

// get all of the audit transactions from 2008
databaseConnection.query("SELECT * FROM audit WHERE date LIKE '%2008%'", function(err, res){
  res.forEach((audit) => {
    console.log(new Date(audit.date))
    console.log(audit.date.toString())
  })
})
