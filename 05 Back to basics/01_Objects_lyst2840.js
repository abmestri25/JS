// THIS IS OBJECT
var User = function(firstName,courseCount){
  this.firstName = firstName
  this.courseCount = courseCount
  this.getCourseCount = function(){
    console.log(`Course Count is: ${this.courseCount}`);
  }
}

// ADDING EXTRA PROTOTYPES TO OBJECT
User.prototype.getFirstname = function(){
  console.log(`Your Firstname is : ${this.firstName}`);
}
User.prototype.getCourseCount = function(){
  console.log(`Your CourseCount is : ${this.courseCount}`);
}

// CREATING OBJECT USING NEW KEYWORD
var abhi = new User("Abhishek",2)

if (abhi.hasOwnProperty("firstName")) {
    abhi.getFirstname() 
}

if (abhi.hasOwnProperty("getCourseCount")) {
  abhi.getCourseCount()
}
// console.log(abhi);
console.log("----------------------------");
var sam = new User("Sam",1)
sam.getFirstname()
sam.getCourseCount()


// console.log(sam);