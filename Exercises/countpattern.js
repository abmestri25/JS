let string = '';
let count = 1;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    string += count;
    count++
    
  }
  string += '\n';
}
console.log(string);


