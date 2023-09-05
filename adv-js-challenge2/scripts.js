const myFilter = (arr, callback) => {
	const newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			newArr.push(arr[i]);
		}
	}

	return newArr;
};

const numbers = [1, 2, 3, 4, 5];
const numberTest = (num) => num > 2;
console.log(myFilter(numbers, numberTest));
