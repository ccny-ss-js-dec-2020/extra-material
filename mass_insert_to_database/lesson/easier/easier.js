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
fs.readFile('./movies.json', 'utf-8', function(fileReadErr, fileReadResponse){
  if(fileReadErr){
    throw new Error(fileReadErr);
  }
  // declaring a countries variable and assigning it the value of the parsed json file in a variable
  var movies = JSON.parse(fileReadResponse);

  // looping through the countries array
  for(var i = 0; i < movies.length; i++){
    //going to do a mass insert into the database
    //by looping through the object and then inserting
    //each object into the database
    console.log(movies[i].Title);

    // creating my insertion string to the database
    // inserting each object into the movies table

    // You see that some of the lines contain single quotes ', and some of them do not.
    // That is because single quotes are only needed to be around strings in mysql.
    // The fields where you do not see single quotes are for integers and decimals, i.e. US Gross & IMDB Votes
    // review the log of the final result of the insertConnectionString below
    var insertConnectionString = "INSERT INTO movies (title, usGross, worldWideGross, usDvdSales, productionBudget, releaseDate, mpaaRating, distributor, source, majorGenre, creativeType, director, rottenTomatoesRating, imdbRating, imdbVotes) VALUES ";
    insertConnectionString += "(";
    insertConnectionString += "'"+movies[i].Title+"',";
    insertConnectionString += ""+movies[i].UsGross+",";
    insertConnectionString += ""+movies[i].WorldwideGross+",";
    insertConnectionString += ""+movies[i].UsDvdSales+",";
    insertConnectionString += ""+movies[i].ProductionBudget+",";
    insertConnectionString += "'"+movies[i].ReleaseDate+"',";
    insertConnectionString += "'"+movies[i].MpaaRating+"',";
    insertConnectionString += "'"+movies[i].Distributor+"',";
    insertConnectionString += "'"+movies[i].Source+"',";
    insertConnectionString += "'"+movies[i].MajorGenre+"',";
    insertConnectionString += "'"+movies[i].CreativeType+"',";
    insertConnectionString += "'"+movies[i].Director+"',";
    insertConnectionString += ""+movies[i].RottenTomatoesRating+",";
    insertConnectionString += ""+movies[i].ImdbRating+",";
    insertConnectionString += ""+movies[i].ImdbVotes+"";
    insertConnectionString += ");";

    // end result of the insertConnectionString before running the query against the database
    console.log(insertConnectionString)

    //running the query against the database
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
