// Calculating moon orbit

function moonOrbits(earthDays) {
	return earthDays / 27.3;
}

// Working with circles

function circleArea(radius) {
	return Math.PI * (radius * radius);
}

function circleCircumference(radius) {
	return 2 * Math.PI * radius;
}

// Years to days & seconds
function ageInDays(years) {
	leapYearDays = years / 4; //approximately
	return Math.round(years * 365 + leapYearDays);
}

function ageInSeconds(years) {
	return years * (365 * 24 * 60 * 60);
}

// Remainder of two numbers
function returnRemainder(x, y) {
	return x % y;
}

// Basketball points
function basketballPoints(twos, threes) {
	return 2 * twos + 3 * threes;
}

// Less than 100?
function lessThanHundred(x, y) {
	return x + y >= 100 ? false : true;
}
