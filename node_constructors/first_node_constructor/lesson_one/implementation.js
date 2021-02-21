// importing the Person Constructor Object
var Person = require('./constructor.js');

// creating an instance of the Person Constructor Object
var jared = new Person("Jared", 30, "brown", "pootie tang");

// adding the teach function to the Person Constructor object
jared.teach = function(student){
	console.log("Jared is teaching " + student);
}

// logging the value of the instance of the Person Contstructor Object that was created
console.log(jared);
// running a function that is a part of the object
jared.old();
// running the teach function that i created above
jared.teach("Jarvis");
