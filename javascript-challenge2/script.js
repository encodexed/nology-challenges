// Tell me the day!
let day = 4;

switch (day) {
	case 1:
		console.log("Today is Monday");
		break;
	case 2:
		console.log("Today is Tuesday");
		break;
	case 3:
		console.log("Today is Wednesday");
		break;
	case 4:
		console.log("Today is Thursday");
		break;
	case 5:
		console.log("Today is Friday");
		break;
	case 6:
		console.log("Today is Saturday");
		break;
	case 7:
		console.log("Today is Sunday");
		break;
	default:
		console.log("Something isn't right!");
}

// Eye colour
let parent1 = "blue";
let parent2 = "blue";
let blue = 0;
let brown = 0;
let green = 0;

// Used a loop to prevent code duplication
let parents = [parent1, parent2];
for (let i = 0; i < parents.length; i++) {
	switch (parents[i]) {
		case "blue":
			blue++;
			break;
		case "brown":
			brown++;
			break;
		case "green":
			green++;
			break;
		// default: do nothing
	}
}

// For similar eye colours between parents
if (brown === 2) {
	console.log(
		"Your eye colours are brown and brown, the chances of your child having blue eyes is 6.25%, brown is 75%, green is 18.75%"
	);
} else if (green === 2) {
	console.log(
		"Your eye colours are green and green, the chances of your child having blue eyes is 25%, brown is <1%, green is 75%"
	);
} else if (blue === 2) {
	console.log(
		"Your eye colours are blue and blue, the chances of your child having blue eyes is 99%, brown is 0%, green is 1%"
	);
}

// For mismatching eye colours between parents
if (brown === 1) {
	if (blue === 1) {
		console.log(
			"Your eye colours are blue and brown, the chances of your child having blue eyes is 50%, brown is 50%, green is 0%"
		);
	} else if (green === 1) {
		console.log(
			"Your eye colours are green and brown, the chances of your child having blue eyes is 12.5%, brown is 50%, green is 37.5%"
		);
	}
} else if (blue === 1 && green === 1) {
	console.log(
		"Your eye colours are blue and green, the chances of your child having blue eyes is 50%, brown is 0%, green is 50%"
	);
}
