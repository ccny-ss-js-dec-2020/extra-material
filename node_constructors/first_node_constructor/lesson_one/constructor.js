// creating a Constructor Object called "Person"
module.exports = function Person(name, age, eyeColor, favoriteMovie){
	this.name = name;
	this.age = age;
	this.eyeColor = eyeColor;
	this.favoriteMovie = favoriteMovie;
	this.old = function() {
		if(this.age > 100){
			console.log(this.name + " is old");
		} else {
			console.log(this.name + " is young");
		}
	}
}
