// Class

class Dog {
	static allDogs = [];

	static walkAverage() {}

	constructor(name, age, breed) {
		this.name = name;
		this.age = age;
		this.breed = breed;
		this.walksDistances = [];
		Dog.allDogs.push();
	}

	static allWalksAverage() {
		return;
	}

	walk(distance) {
		this.walksDistances.push(distance);
	}

	calcTotalWalkDist() {
		return this.walksDistances.reduce((acc, next) => acc + next);
	}

	walkSummary() {
		console.log(
			`Dog: ${this.name} - Walks: ${
				this.walksDistances.length
			} - Total Distance: ${this.calcTotalWalkDist()}`
		);
	}

	walkAverage() {
		return this.calcTotalWalkDist() / this.walksDistances.length;
	}
}

// Object

function Dog(name, age, breed) {
	this.name = name;
	this.age = age;
	this.breed = breed;
	this.walksDistances = [];
}

Dog.prototype.walk = function (distance) {
	this.walksDistances.push(distance);
};

Dog.prototype.calcTotalWalkDist = function () {
	return this.walksDistances.reduce((acc, next) => acc + next);
};

Dog.prototype.walkSummary = function () {
	console.log(
		`Dog: ${this.name} - Walks: ${
			this.walksDistances.length
		} - Total Distance: ${this.calcTotalWalkDist()}`
	);
};

Dog.prototype.walkAverage = function () {
	return this.calcTotalWalkDist() / this.walksDistances.length;
};

// Operations

const lassie = new Dog("Lassie", 3, "Collie");
const beethoven = new Dog("Beethoven", 8, "St. Bernard");

lassie.walk(2.04);
lassie.walk(3.64);
beethoven.walk(0.57);
beethoven.walk(1.52);

console.log(lassie.walkSummary());
console.log(beethoven.walkSummary());

console.log(lassie.walkAverage());
console.log(beethoven.walkAverage());
