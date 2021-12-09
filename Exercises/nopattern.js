let string = '';
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    string += i;    
  }
  string += '\n';
}
console.log(string);

// OUTPUT
// 1
// 22
// 333
// 4444


let string = '';
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    string += j;    
  }
  string += '\n';
}
console.log(string);

// OUTPUT
// 1
// 12
// 123
// 1234