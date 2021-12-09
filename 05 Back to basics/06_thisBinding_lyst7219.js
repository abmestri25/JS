const abhi = {
  firstName: "Abhishek",
  lastName: "Mestri",
  role: "Admin",
  courseCount: 3,
  getInfo: function () {
    console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
  },
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4,
};

abhi.getInfo();
// dj.getInfo();
console.log("---------------------------");
// bind() gives reference back
abhi.getInfo.bind(dj)();
console.log("---------------------------");

// this is by using reference
var djInfo = abhi.getInfo.bind(dj);
djInfo();
console.log("---------------------------");

// call() works same as bind but it doesn't give referece back
abhi.getInfo.call(dj);
