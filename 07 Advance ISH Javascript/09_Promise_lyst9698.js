const uno = () => {
  return "I am One";
};

// const dos = () => {
//   setTimeout(() => {
//     return "I am two";
//   }, 3000);
// };

const dos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if you returning above then no need to return it again
      resolve("I am two");
    }, 3000);
  });
};

const tres = () => {
  return "I am Three";
};

// if we want to use promises then
// we have to use async functions/keyword 

const callMe = async () => {
  let valOne = uno();
  console.log(valOne);
  // if we are using async method then 
  // we have to use await keyword for a method 
  // which we want execute after some time
  let valTwo = await dos();
  console.log(valTwo);

  let valThree = tres();
  console.log(valThree);
};

callMe();
