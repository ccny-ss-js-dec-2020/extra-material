/* Use the audit table from the lesson and do some more inserts */
const mysql = require('mysql');
const databaseConnection = mysql.createConnection(process.env.LOCAL_DATABASE);
databaseConnection.connect();

const inquirer = require('inquirer');

console.log("Select a month, and get all of the audit records from any year for that month")
inquirer.prompt([
  {
    type: "list",
    message: "Select a month",
    choices: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    name: "month"
  }
]).then(function(answer){
  let monthAbbreviated;
  switch(answer.month){
    case "January":
      monthAbbreviated = "Jan";
      break;
    case "February":
      monthAbbreviated = "Feb";
      break;
    case "March":
      monthAbbreviated = "Mar";
      break;
    case "April":
      monthAbbreviated = "Apr";
      break;
    case "May":
      monthAbbreviated = "May";
      break;
    case "June":
      monthAbbreviated = "Jun";
      break;
    case "July":
      monthAbbreviated = "Jul";
      break;
    case "August":
      monthAbbreviated = "Aug";
      break;
    case "September":
      monthAbbreviated = "Sep";
      break;
    case "October":
      monthAbbreviated = "Oct";
      break;
    case "November":
      monthAbbreviated = "Nov";
      break;
    case "December":
      monthAbbreviated = "Dec";
      break;
  }

  databaseConnection.query("SELECT * FROM audit", function(err, data){
    data.forEach((audit) => {
      if(audit.date.toString().includes(monthAbbreviated)){
        console.log(audit)
      }
    })
    databaseConnection.end();
  });
});
