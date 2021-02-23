//importing dependencies
var express = require('express');
//you do not have to do npm i for this, as it is built into node
var path = require('path');

//storing express.Router() in a variable
//which is built into express to store and export your routes
var router = express.Router();

//connecting your root route to an html file on the client side
router.get('/', function(req,res){
	//research path & path.join on stack overflow
	//console.log(req)
	//console.log(dirname)
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

//this post route is connected to an event on the front end/client side
//whatever the client sends through will be the req.body
router.post('/first-post', function(req,res){
	try {
		if(req.body.name == "bob"){
			throw "Custom Error"
		}
		res.json(req.body)
	} catch (e) {
		console.log("here: " + e)
		res.status(400).json({error: e})
	}
});

//exporting routes to be imported in our server.js
module.exports = router;
