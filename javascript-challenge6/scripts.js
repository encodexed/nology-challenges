// Generating unique random numbers between 0 and 15
let numbers = [];
while (numbers.length < 10) {
	const newNum = +(Math.random() * 14 + 1).toFixed(2);
	if (!numbers.includes(newNum)) {
		numbers.push(newNum);
	}
}
console.log("10 unique numbers", numbers);

// generateNumbers function

function generateNumbers(n, r) {
	let generatedNumbers = [];

	while (generatedNumbers.length < n) {
		generatedNumbers.push(Math.floor(Math.random() * r));
	}
	console.log("generatedNumbers", generatedNumbers);
}

// generateNumbers function (unique)

function generateNumbersBonus(n, r, isUnique) {
	if (n > r && isUnique) {
		return "boundaries create infinite loop";
	}

	let moreNumbers = [];
	while (moreNumbers.length < n) {
		const newNum = Math.floor(Math.random() * r);
		if (isUnique && moreNumbers.includes(newNum)) {
			continue;
		} else {
			moreNumbers.push(newNum);
		}
	}
	return moreNumbers;
}
