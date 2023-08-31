// Sum of n

function sum(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	console.log(sum);
	return sum;
}

function alternateSum(n) {
	return (n * (n + 1)) / 2;
}

// Shopping list

function shoppingList(array) {
	for (let i = 0; i < array.length; i++) {
		console.log(`${i + 1}. ${array[i]}`);
	}
}

// Capitalise odd positioned letters

function capitaliseOddIndexes(str) {
	let newStr = "";

	for (let i = 0; i < str.length; i++) {
		if (i % 2 === 1) {
			newStr += str[i].toUpperCase();
		} else {
			newStr += str[i];
		}
	}

	return newStr;
}

// Bonus

function capitaliseOddIndexesBonus(str) {
	let newStr = "";

	for (let i = 0; i < str.length; i++) {
		if (i % 2 === 1) {
			newStr += str[i].toUpperCase();
		} else {
			newChar = str[i].charCodeAt(0);
			newStr += String.fromCharCode(newChar + 1);
		}
	}

	return newStr;
}

// Removing vowels

function removeVowels(str) {
	let newStr = "";

	for (let i = 0; i < str.length; i++) {
		switch (str[i]) {
			case "a":
			case "e":
			case "i":
			case "o":
			case "u":
				// do nothing
				break;
			default:
				newStr += str[i];
		}
	}

	return newStr;
}

// Bonus

function removeVowelsBonus(str) {
	let newStr = "";

	for (let i = 0; i < str.length; i++) {
		switch (str[i]) {
			case "a":
			case "e":
			case "i":
			case "o":
			case "u":
				if (i !== str.length - 1) {
					switch (str[i + 1]) {
						case "l":
						case "m":
						case "r":
							newStr += str[i];
							break;
						default:
						// do nothing
					}
				}
				break;
			default:
				newStr += str[i];
		}
	}

	return newStr;
}
