var name = "Abhi";

console.log("Line number 3", name);

function sayName() {
  var name = "Mr. H";
  console.log("Line number 7", name);
  
  function sayNameTwo() {
    var name = "Mr. HC";
    console.log("Line number 12", name);
  }
  sayNameTwo();
}

sayName();
