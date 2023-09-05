// Write a function which takes in a callback, to alter every word in a sentence

const alterWords = (sentence, callback) => {
	// console.log({ sentence, callback });
	return callback(sentence);
};

// Callback functions

function capitaliseFirstWord(text) {
	return text[0].toUpperCase + text.slice(1);
}

function reverseWord(text) {
	return text.reverse().join("");
}

// This code is incomplete
