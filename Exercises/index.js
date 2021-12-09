
// let greetings = ['Happy Birthday!',
//                  'Merry Christmas my love',
//                  'A happy Christmas to all the family',
//                  'You\'re all I want for Christmas',
//                  'Get well soon'];

// for (let i = 0; i < greetings.length; i++) {
//   let input = greetings[i];
//   if (greetings[i].indexOf('Christmas') !== -1) {
//     let result = input;
//     console.log(result);
//   }
// }




// let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

// for (let i = 0; i < cities.length; i++) {
//   let input = cities[i]; //getting first element
//   let lower = input.toLowerCase(); //making it lowercase
//   let firstLetter = lower.slice(0,1);  //grabing first letter
//   let capitalized = lower.replace(firstLetter,firstLetter.toUpperCase()); //capitalizing first letter
//   let result = capitalized; //assigned capitalized to result
//   console.log(result);

// }


// let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                 'GNF576746573fhdg4737dh4;Greenfield',
//                 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                 'SYB4f65hf75f736463;Stalybridge',
//                 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

// for (let i = 0; i < stations.length; i++) {
//   let input = stations[i];
//   let code = input.slice(0,3);
//   let semiC = input.indexOf(';');
//   let name = input.slice(semiC + 1);
//   console.log(name);
//   let result = code + ': ' + name;
//   console.log(result);  
// }

// let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

// let myArray = myData.split(',')
// let myNewString = myArray.join(',');
// console.log(myNewString);



let total = 0;


let products = [
  'Underpants:6.99',
  'Socks:5.99',
  'T-shirt:14.99',
  'Trousers:31.99',
  'Shoes:23.99'];

for(let i = 0; i < products.length; i++) {
  let subArray = products[i].split(':');
//   using split array got formed
  console.log(subArray);
  let name = subArray[0];
  let price = Number(subArray[1]);
  total += price;
  console.log(total);
  let itemText = name + ' — $' + price;
  console.log(itemText);
}   

let result = 'Total: $' + total.toFixed(2);
console.log(result);

