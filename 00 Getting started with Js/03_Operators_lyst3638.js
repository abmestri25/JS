//  D = (L - S)/L  * 100

//  a + ((b * c) / d) * e

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Discount percentage is :" + discountPercent);

// Math.round() is used to round the number which is imported from Math library
displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage + "% off");

var result = listingPrice > sellingPrice;

console.log(typeof result);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
