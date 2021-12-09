
// this is simple function
function tipper(a){
  var bill = parseInt(a);
  console.log(bill + 5);
}

// this is arrow function
// const tipper = (a) => {
//   // parseInt() to convert into integer
//   var bill = parseInt(a);
//   console.log(bill + 5);
// }
tipper(80);

const bigTipper = (a) => {
  var bill = parseInt(a);
  console.log(bill + 15);
};

bigTipper("200");

console.log(name);    //undefined
var name = "Abhishek";

const sayName = () => {
  var name = "MR. H";
  console.log(name);
}
sayName();

console.log(name);

const sayHello = (name) => {
  console.log(`My name is ${name}`);
}

sayHello("Pooja")

