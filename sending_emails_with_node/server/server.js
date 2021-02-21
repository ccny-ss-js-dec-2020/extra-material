//dependencies
var express = require('express');
var bodyParser = require('body-parser');

//imported from the routes that you exported from routes.js
var routes = require('./controller/routes.js');

//express
var app = express();

//middleware that converts json and text sent from the client side
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//middleware that connects your imported routes to the routes of your application
app.use('/', routes);
//middleware that connects your static files(html,css,front end js)
app.use(express.static('./client'));

//this is how you set the port number in order to have your app work with heroku
//this is saying "if there is an environment variable called PORT, then use that"
//if there is not an environment variable called PORT, then use 3000 as the port number
var PORT = process.env.PORT || 3000;

//runs your server and has it listen on a port
app.listen(PORT, function(){
	console.log("Listening on PORT " + PORT);
});
