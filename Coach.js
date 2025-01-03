// method 1
class Coach {
	constructor(name, specialization, rating) {
		this.name = name;
		this.specialization = specialization;
		this.rating = rating;
	}

	updateRating(newRating) {
		this.rating = newRating;
	}

	changeSpecialization(newSpecialization) {
		this.specialization = newSpecialization;
	}

	changeName(newName) {
		this.name = newName;
	}

	displayInfo() {
		console.log(
			`Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`
		);
	}
}

const coach1 = new Coach("John Doe", "Fitness", 4.7);

const coach2 = new Coach("Alice Smith", "Yoga", 4.9);

coach1.displayInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"

coach2.displayInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"

// method 2
/* class Coach {
	constructor(name, specialization, rating) {
		this.name = name;
		this.specialization = specialization;
		this.rating = rating;
	}

	displayInfo() {
		console.log(
			`Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`
		);
	}
}

const coach1 = new Coach("John Doe", "Fitness", 4.7);
const coach2 = new Coach("Alice Smith", "Yoga", 4.9);

coach1.displayInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"
coach2.displayInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9" */
