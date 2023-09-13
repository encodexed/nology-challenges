const delayedIncDec = (n, mode, timeout) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (mode !== "inc" && mode !== "dec") {
				reject(new Error("invalid mode"));
			} else if (typeof n !== "number") {
				reject(new Error("n must be a number"));
			} else {
				if (mode === "inc") {
					resolve(n++);
				} else {
					resolve(n--);
				}
			}
		}, timeout);
	});
};
// Working:
// delayedIncDec(5, "inc", 1000).then((value) => console.log(value));
// delayedIncDec(25, "dec", 4000).then((value) => console.log(value));
// delayedIncDec(-10, "dec", 3500).then((value) => console.log(value));

// Errors:
// delayedIncDec("5", "inc", 2500).then((value) => console.log(value));
// delayedIncDec(5, "foo", 2500).then((value) => console.log(value));

const delayedFilter = (array, callback, timeout) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!array instanceof Array) {
				reject(new Error("first argument must be an array"));
			}
			const newArr = array.filter(callback);
			resolve(newArr);
		}, timeout);
	});
};

const theCallback = (item) => item > 5;

delayedFilter([1, 2, 3, 4, 5, 6, 7, 8], theCallback, 4000).then((array) => {
	console.log(array.join(", "));
});

delayedFilter([-10, -5, 0, 5, 10, 15], theCallback, 1000).then((array) => {
	console.log(array.join(", "));
});
