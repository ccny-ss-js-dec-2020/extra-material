/*
  In this file, i am reading a json object array and inserting each object from that array into the database
*/

// importing the 'fs' module into my file. Don't need to install from npm because it is built into node
var fs = require('fs');
// importing the 'mysql' module into my file. We needed to install this from npm.
var mysql = require('mysql');

//creating a database client to connect to,
//which as you see, uses the object that we set up
var databaseConnection = mysql.createConnection({
	user: 'root',
	password: '',
	database: 'first_sql',
	host: 'localhost',
	port: 3306
});

//connecting to the database locally
databaseConnection.connect(function(err, res){
	if(err){
		console.error("Error Connecting to Database");
		console.error(err);
	} else {
		console.log("Successfully connected to database");
	}
});

// getting the contents of my countries.json file in the same directory
fs.readFile('./countries.json', 'utf-8', function(fileReadErr, fileReadResponse){
  if(fileReadErr){
    throw new Error(fileReadErr);
  }
  // declaring a countries variable and assigning it the value of the parsed json file in a variable
  var countries = JSON.parse(fileReadResponse);

  // looping through the countries array
  for(var i = 0; i < countries.length; i++){
    //going to do a mass insert into the database
    //by looping through the object and then inserting
    //each object into the database
    console.log(escapeApostrophe(countries[i].capital));

    // creating my insertion string to the database
    // inserting each object into the countriesWithoutObjects table

		// You see that some of the lines contain single quotes ', and some of them do not.
    // That is because single quotes are only needed to be around strings in mysql.
    // The fields where you do not see single quotes are for integers and decimals, i.e. Population & Area
		// review the log of the final result of the insertConnectionString below

    // you see 'escapeApostrophe' is being called for every single key in every object
    var insertConnectionString = "INSERT INTO countriesWithoutObjects (name, capital, relevance, region, subregion, population, demonym, area, gini, nativeName, alpha2Code, alpha3Code) VALUES ";
    insertConnectionString += "(";
    insertConnectionString += "'"+escapeApostrophe(countries[i].name)+"',";
    insertConnectionString += "'"+escapeApostrophe(countries[i].capital)+"',";
    insertConnectionString += "'"+escapeApostrophe(countries[i].relevance)+"',";
    insertConnectionString += "'"+escapeApostrophe(countries[i].region)+"',";
    insertConnectionString += "'"+escapeApostrophe(countries[i].subregion)+"',";
    insertConnectionString += ""+escapeApostrophe(countries[i].population)+",";
    insertConnectionString += "'"+escapeApostrophe(countries[i].demonym)+"',";
    insertConnectionString += ""+escapeApostrophe(countries[i].area)+",";
    insertConnectionString += ""+escapeApostrophe(countries[i].gini)+",";
    insertConnectionString += "'"+escapeApostrophe(countries[i].nativeName)+"',";
    insertConnectionString += "'"+escapeApostrophe(countries[i].alpha2Code)+"',";
    insertConnectionString += "'"+escapeApostrophe(countries[i].alpha3Code)+"'";
    insertConnectionString += ");";

    // end result of the insertConnectionString before running the query against the database
    console.log(insertConnectionString)

    // running the query against the database
    databaseConnection.query(insertConnectionString, function(dbErr, dbResponse) {
    	if(dbErr){
    		throw new Error(dbErr)
    	} else {
    		// if not error, then logging the successful response here
        console.log("Logging the response from the database insert")
        console.log(dbResponse);
    	}
    });
  }
  // closing the database connection once we're done with our mass insert
  databaseConnection.end();
});

// if there is an apostrophe in a word, sql will misunderstand it as single quote, so it will close out the string
// we need to escape the character in order for it to be recognized as an apostrophe as part of the word and not a closing single quote
// we need to check this for every item being inserted into the database
// https://www.w3schools.com/js/js_strings.asp
function escapeApostrophe(input){
  // 'typeof string == string' means if the datatype of the item is a string. if it's an integer, then dont check for an apostrophe
  // 'string.indexOf("'") > -1' means if there is an apostrophe in the string
  // if both statements equate to true, then run the logic in between the {}, which is 'string = string.replace("'", "\\'")'
  if(typeof input == "string" && input.indexOf("'") > -1){
    // re-assigning the value of input to have the ' replaced with a \'
    input = input.replace("'", "\\'")
  }
  // this function will return the input value, where the value of the input was changed or not
  return input;
}
