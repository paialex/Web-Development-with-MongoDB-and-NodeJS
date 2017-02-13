var myVariable; // declaring a variable with no value

var myOtherVariable = 'Hello!';
var myFirstName = "Jason";
var myLastName = "Krol";
//note that strings can use ' or " interchangeably

var myFullName = myFirstName + ' ' + myLastName;
// => Jason Krol
// addition with strings will concatenate

var someNumber = 1,
    anotherNumber = 25;
/* note that you can declare multiple variables separated with commas */

var total = someNumber + anotherNumber; // => 26
// addition with numbers will perform Math

whatIfIForgetVar = "uh oh";



var sayHello = function() {
    console.log('Hello!');
}

sayHello();



var doWork = function(val) {
    var half = val / 2;
    // do more work...
}
var someValue = 20;
doWork(someValue);

var fullName = function(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(fullName('Jason', 'Krol'));
// => Jason Krol

var getFirstName = function() {
    return 'Jason';
}
var getLastName = function() {
    return 'Krol';
}
console.log(fullName(getFirstName(), getLastName()));
// => Jason Krol



var myObject = {}; // that's it!

var person = {};
person.firstName = 'Jason'; // properties
person.lastName = 'Krol';

person.fullName = function() { // methods
    return this.firstName + ' ' + this.lastName;
}

person.colors = ['red', 'blue', 'green']; // array property



// define properties during declaration
var book = {
    title: 'Web Development with MongoDB and NodeJS',
    author: 'Jason Krol',
    publisher: 'Packt Publishing'
};
console.log(book.title);
// => Web Development with MongoDB and NodeJS

book.pageCount = 150; // add new properties



var jason = {
    name: 'Jason Krol'
};
var book = {
    title: 'Web Development with MongoDB and NodeJS',
    publisher: 'Packt Publishing',
    author: jason
};
console.log(book.author.name);
// => Jason Krol



var myFunction = function() {
    if (this.timesRun)
        this.timesRun += 1;
    else
        this.timesRun = 1;


    // do some actual work

    console.log(this.timesRun);
}

myFunction();
// => 1;
myFunction();
// => 2;
myFunction();
// => 3;

console.log(myFunction.timesRun);
// => undefined



console.log('Hello...');
setTimeout(function() {
    console.log('World!');
}, 5000);
// => Hello...
// (5 second delay)
// => World!



var sayWorld = function() {
    console.log('World!');
}
setTimeout(sayWorld, 5000);
// (5 second delay)
// => World!



var someValue;
var myFunction = function() {
    // change someValu eafter 5 seconds
    setTimeout(function() {
        someValue = someValue / 2;
    }, 5000);
}

someValue = 100;
myFunction();
console.log(someValue);
// => 100



var someValue;
var myFunction = function(callback) {
    // change someValue after 5 seconds
    setTimeout(function() {
        someValue = someValue / 2;
        callback(someValue);
    }, 5000);
}

someValue = 100;
myFunction(function() {
    console.log(someValue);
});
// => 50



var favFoods = ['pizza', 'cheeseburgers', 'french fries'];

var stuff = []; // empty array
var firstFood = favFoods[0]; // => pizza

// array functions:
favFoods.push('salad'); // add new item
// => ['pizza', 'cheeseburgers', 'french fries', 'salad']
favFoods.pop(); // remove the last item
// => ['pizza', 'cheeseburgers', 'french fries']



if (1 === 1)
    doWork();

var myVar = 1;
if (myVar > 0) {
    myVar = myVar * 2;
    doWork(myVar);
} else
    doWork(0);

if (myVar === 0) {
    doWork();
} else if (myVar > 0 && myVar < 10) { // && is AND
    var val = doNothing();
    if (val || myVar === 5) { // || is OR
        lastMinuteCleanup();
    }
} else {
    var errorcode = abort();
    if (!errorcode) { // ! is NOT
        console.log('There was an error!');
    }
}



var myVar = 0;
for (var i = 0; i < 100; i += 1) {
    myVar = myVar + i;
    console.log(myVar);
}
// => 1 2 3 4 5 6 7 8 ... 100


var x = 0;
do {
    x += 1;
    console.log(x);
} while (x < 100);
// => 1 2 3 4 5 6 7 8 ... 99

while (x > 90) {
    x -= 1;
    console.log(x);
}
// => 99 98 97 96 95 94 93 92 91 90



{
    title: 'This is the title',
    description: 'Here is where the description would be',
    'page-count': 150,
    authors: [{
        name: 'John Smith'
    }, {
        name: 'Jane Doe'
    }, {
        name: 'Andrea Johnson'
    }],
    id: '1234-567-89012345'
}



mongoose.connect('mongodb://localhost/MyApp');
mongoose.connection.on('open', function() {
    console.log("Connected to Mongoose...");
});



// ** file: dowork.js
module.exports = {
    doWork: function(param1, param2) {
        return param1 + param2;
    }
}

// ** file: testing.js
var worker = require('./dowork'); // note: no .js in the file

var something = 1;
var somethingElse = 2;

var newVal = worker.doWork(something, somethingElse);
console.log(newVal);
// => 3
