// Creating a constructor object called Person
function Person(name, age){
	this.name = name;
	this.age = age;
	this.allAges = [];
	this.amountOfAges = 0;
	this.ageUp = function(){
		this.age++;
		this.allAges.push(this.age);
		this.amountOfAges++;
		console.log("You are one year older, at the ripe age of " + this.age);
	}
	this.benjaminButton = () => {
		this.age--;
		this.allAges.push(this.age);
		this.amountOfAges++;
		console.log("Sup " + this.name + " Button, you are now " + this.age + " years old");
	}
	this.printAges = () => {
		console.log("All of your ages are " + this.allAges.join(", ") + " and the amount of ages are " + this.amountOfAges);
	}
}

// Creating an instance of the Person Constructor Object
// Running functions that belong to the Person Constructor Object
argPerson = new Person("Jared", 33);
argPerson.ageUp();
argPerson.ageUp();
argPerson.benjaminButton();
argPerson.printAges();
