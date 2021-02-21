function Warrior(name, attack, hp){
	this.name = name;
	this.attack = attack;
	this.hp = hp;
	this.fight = (opponent) => {
		opponent.hp -= this.attack;
		console.log("You attacked " + opponent.name + " for " + this.attack + ". " + opponent.name + " has " + opponent.hp + " hp left.");
		this.hp -= opponent.attack;
		console.log(opponent.name + " attacked you for " + opponent.attack + ". You have " + this.hp + " hp left.")
	}
}

var koncho = new Warrior("Koncho", 5, 40);
var hammer = new Warrior("Hammer", 4, 50);

koncho.fight(hammer);
koncho.fight(hammer);
koncho.fight(hammer);
koncho.fight(hammer);
koncho.fight(hammer);
koncho.fight(hammer);
koncho.fight(hammer);
koncho.fight(hammer);
koncho.fight(hammer);
koncho.fight(hammer);
koncho.fight(hammer);
koncho.fight(hammer);
koncho.fight(hammer);

