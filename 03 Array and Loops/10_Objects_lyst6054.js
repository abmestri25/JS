let user = {
  firstName: "Hitesh",
  lastName: "Choudhary",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 44;  //update
console.log(user.loginCount);
console.table(user);



const MiPhone = {
  model : "Redmi 5A",
  RAM : "2 GB",
  ROM : "8 GB",
  Camera : "8 MP",
  Battery : "2250 mAh",
  Price : 5000,
  Color : "Grey",
  Brand : "Xioami"
}


console.log(MiPhone);
console.table(MiPhone)


