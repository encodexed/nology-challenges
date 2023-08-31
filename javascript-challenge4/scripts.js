// Hobbies
// 1: create hobbies array
const hobbies = ["tennis", "music", "gaming"];

// 2: console.log first hobby
console.log(hobbies[0]);

// 3: remove first hobby and store as variable
const removedHobby = hobbies.shift();

// 4: store length of array as variable
const hobbiesLength = hobbies.length;

// 5: add another hobby at the end of the array
hobbies.push("playing with my birds");

// 6: print last hobby in the console
console.log(hobbies[hobbies.length - 1]);

// bonus: join all hobbies in a string, separated by ", "
const arrayAsString = hobbies.join(", ");

// Grocery Lists
// 1: create array of 5 items you often buy
const groceries = ["milk", "energy drink", "cucumbers", "tomatoes", "chicken"];

// 2: log list to console, delimited by |
console.log(groceries.join("|"));
