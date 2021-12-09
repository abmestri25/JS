let string = '';
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    string += '*';
  }
  string += '\n';
}
console.log(string);


// OUTPUT
// *
// **
// ***
// ****
// *****


let string = '';
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    string += '*';
  }
  string += '\n';
}
console.log(string);

// OUTPUT
// *****
// ****
// ***
// **
// *
