var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

// GIVEN TIME TO EXECUTE
setInterval(() => {
  if (count < 300) {
    count++;
    counter.innerText = count;
  }
}, 10);

// TIMEOUT DURING EXECUTION
setTimeout(() => {
  followers.innerHTML = "My Followers on Instagram !";
}, 3000);
