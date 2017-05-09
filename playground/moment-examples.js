var moment = require('moment');
console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> 60

var now = moment();

console.log('current timestamp ', now.unix());

var timestamp = 1494346284;
var currentMoment = moment.unix(1494346284);

console.log('curent moment ' + currentMoment.format('MMM D,YY @ h:mm a'));

// January 3rd, 2017 @ 12:13 AM

console.log('curent moment ' + currentMoment.format('MMMM Do, YYYY @ hh:mm A'));
