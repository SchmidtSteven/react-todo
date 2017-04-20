// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAd = [9, 5];
//
// console.log(add(toAd[0], toAd[1]));
//
// console.log(add(...toAd));


// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
//
// var final = [...groupA, ...groupB];
//
// console.log(final);

var person = ['Andrew', 25];
var person2 = ['Jen', 29];
// Hi Andrew, you are 25

function logPerson (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

logPerson(...person);
logPerson(...person2);

var names = ['Mike', 'Ben'];
var final = ['Steven', ...names];

final.forEach( (name) => {
  console.log('Hi ' + name);
});
