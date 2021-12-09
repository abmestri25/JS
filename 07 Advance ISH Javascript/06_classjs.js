class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  courseList = [];

  getInfo() {
    return { name: this.name, email: this.email };
  }

  enrollCourse(name) {
    this.courseList.push(name);
  }

  getCourseList() {
    return this.courseList;
  }
  // when we use static keyword before any method name
  // then it is private method for that class
  // subAdmin class cannot access this method
  // as it is private for User class eventhough sunAdmin is child class
  static login() {
    return "You are logged in";

  }
}

class SubAdmin extends User {
  constructor(name, email) {
    // The super keyword is used to access and
    // call functions on an object's parent.
    super(name, email);
  }
  // child class can have their own methods
  // Method Overloading
  getInfo() {
    return "This is Sub Admin";
  }

  login(){
    return "Sub Admin is logged in successfully."
  }
}

module.exports = User;

const rock = new User("rock", "rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
console.log(rock.getCourseList());

console.log("-----------------------");

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getInfo());
tom.enrollCourse("ReactJS Bootcamp");
console.log(tom.getCourseList());
console.log(tom.login());

// console.log(tom.login());

// console.log(tom.getInfo());
