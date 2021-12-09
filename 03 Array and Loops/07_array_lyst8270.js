var countries = ["India", "USA", "Japan", "Russia"];

// array creation
var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

console.log(states[1]);

console.log(states.length);
states[0] = "Punjab";
console.log(states);

// this is too array 
var user = ["hitesh", "hitesh@lco.dev", 3, 34, true];
console.log(user);

user.pop();

// pop() removes last element from the array
user.pop();

console.log(user);
// this is used to insert value from first end
user.unshift("NEW VALUE");
console.log(user);
// this is used to remove element from the first end
user.shift();


user.push("pooja")
console.log(user);

// if element does not exist then we get index as -1
console.log(user.indexOf("newyy"));

// this is used to create array
console.log(Array.from("Pooja"));

// p o o j a
