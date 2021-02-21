function Pokemon(name, next_level_name, attack, hp){
	this.name = name;
	this.next_level_name = next_level_name;
	this.attack = attack;
	this.hp = hp;
	this.level = 0;
	this.fight = (attacker) => {
		attacker.hp -= this.attack;
		console.log("You attacked " + attacker.name + " for " + this.attack + ". " + attacker.name + " has " + attacker.hp + " hp left.");
		this.hp -= attacker.attack;
		console.log(attacker.name + " attacked you for " + attacker.attack + ". You have " + this.hp + " hp left.")
		if(attacker.hp < 1){
			this.level++
			this.levelUp();
		}
	},
	this.levelUp = () => {
		if(this.level == 1){
			this.name = this.next_level_name;
			console.log("You have leveled up to " + this.name + ". Total Awesomeness :)");
		} else {
			console.log("You are at level " + this.level + ". Bummer :(")
		}
	}
}

var pikachu = new Pokemon("Pikachu", "Raichu", 50, 50);
var whatever = new Pokemon("Helmuth", null, 1 , 1);

pikachu.fight(whatever);
