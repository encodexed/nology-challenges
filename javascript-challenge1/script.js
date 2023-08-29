console.log(
	"Functions to call:\n- oddsAndEvens(n) \n- comparingNumbers(x, y) \n- userInputType(input)"
);

function oddsAndEvens(n) {
	if (parseInt(n)) {
		if (n % 2 === 1) {
			console.log(`${n} is odd!`);
		} else {
			console.log(`${n} is even!`);
		}
	} else {
		console.log("n is invalid");
	}
}

function comparingNumbers(x, y) {
	if (x > y) {
		console.log(`${x} is greater than ${y}`);
	} else if (x === y) {
		console.log(`${x} is equal to ${y}`);
	} else if (x < y) {
		console.log(`${x} is less than ${y}`);
	} else {
		console.log("something didn't quite work");
	}
}

function userInputType(input) {
	// do string first to weed out NaNs
	if (typeof input === "string") {
		console.log(input);
	} else if (typeof input === "number") {
		console.log(input * input);
	} else {
		console.log("invalid input");
	}
}
