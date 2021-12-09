// Allow user to access course if he is:
// logged in from email
// logged in from Google
// logged in from Facebook

var email = true;
var facebook = false;
var google = true;
var apple = true;

// this is OR operator
if (email || facebook || google || apple) {
  console.log("Login Success");
}
