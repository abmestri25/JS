var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

// this is used to fill array with given element
console.log(testArray.fill("Abhi"));

const myNumber = [23, 24, 25, 55,56, 66, 77, 87, 98];

const result = myNumber.filter((num) => num > 55);

console.log(result);

// Yes, Same exercise file

let users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
console.log(users);


// slice is used to slice the array
console.log(users.slice(1,4));
// splice is used to change the elements of specific indices
users.splice(1, 3, "HI","BABE", "BYE");
console.log(users);



