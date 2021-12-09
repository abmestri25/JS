var user = {
  firstName: "Abhishek",
  lastName: "Mestri",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse : function (course) {
    // push() to add item in the array
    this.courseList.push(course);
  },
  getCourseCount : function () {
    return `User name is ${this.firstName} and enrolled for ${this.courseList} and course count is ${this.courseList.length}`
  }
};

// var courseList = true;
// console.log(user.firstName);
user.buyCourse("React JS course");
user.buyCourse("Django React");
user.buyCourse("Complete JS Course");
console.log(user.getCourseCount());
console.table(user.courseList);

