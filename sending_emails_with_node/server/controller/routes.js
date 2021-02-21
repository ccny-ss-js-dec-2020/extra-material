//importing dependencies
var express = require('express');
//you do not have to do npm i for this, as it is built into node
var path = require('path');

const nodemailer = require('nodemailer');

//storing express.Router() in a variable
//which is built into express to store and export your routes
var router = express.Router();

//connecting your home route to an html file on the client side
//this will what you see at http://localhost:3000
//the connnection to an html page will always be a "get"
router.get('/', function(req,res){
	//research path & path.join on stack overflow
	//console.log(req)
	//console.log(dirname)
	res.sendFile(path.join(__dirname, '../../client/public/index.html'));
});

router.post('/api/email', function(req, res){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: process.env.GMAIL_EMAIL,
			pass: process.env.GMAIL_PASS
		}
	});
	var mailOptions = {
	    from: '"Jared Thomas" <ccny-teach@teachthis.com>',
	    subject: 'Contact Form',
	    to: process.env.GMAIL_EMAIL,
	    message: 'Name: ' + req.body.name + '\n' + 'Email: ' + req.body.email + '\n' + 'Message: ' + req.body.message,
	    html: '<p> ' + 'Name: ' + req.body.name + '<br>' + 'Email: ' + req.body.email + '<br>' + 'Message: ' + req.body.message + ' </p>'
	};
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	      res.json({error: error});
	    } else {
				res.json({success: info});
	    }
	});
});

//exporting routes to be imported in our server.js
module.exports = router;
