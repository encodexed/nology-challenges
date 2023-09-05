// Write your own implementations for:
// reduce

const myReduce = (arr, callback, initial) => {
	let acc;

	for (let i = 0; i < arr.length; i++) {
		if (i === 0 && !initial) {
			acc = arr[0];
			continue;
		} else if (i === 0 && initial) {
			acc = initial;
			continue;
		}
		acc = callback(acc, arr[i]);
	}

	return acc;
};

// const numbers = [1, 2, 3, 4, 5, 6];
// const letters = ["h", "e", "l", "l", "o"];
// console.log(
// 	myReduce(numbers, (acc, cur) => {
// 		return acc - cur;
// 	})
// );

// join

const myJoin = (arr, delimiter = ",") => {
	let str = "";

	for (let i = 0; i < arr.length; i++) {
		if (i === arr.length - 1) {
			str += arr[i];
		} else {
			str += arr[i] + delimiter;
		}
	}

	return str;
};

// const words = ["hey", "there", "my", "friend", "want", "to", "go", "bowling"];
// console.log(myJoin(words, " "));

// reverse

const myReverse = (arr) => {
	const reversed = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		reversed.push(arr[i]);
	}

	return reversed;
};

// const names = ["Anthony Albanese", "Scott Morrison", "Malcolm Turnbull"];
// console.log(myReverse(names));

// findIndex

const myFindIndex = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i])) return i;
	}
	return -1;
};

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const test = (num) => num % 1 > 0;
// console.log(myFindIndex(numbers, test));
