// 1.
// create a function that will alert your favourite food
let favFoodAlert = (favFood) => {
    alert(favFood);
}

favFoodAlert("bagels");

// 2.
// create a function that will has a single parameter called name
// and returns a string that will say "Hello <name>!"
// console.log the result of that function
let hello = (name) => {
    return `Hello ${name}!`;
}
console.log(hello('Bob'));

// 3.
// create a function that will accept two parameters and return the sum of those two parameters

let sum = (a, b) => {
    return a + b;
}
console.log(sum(2,5))

// 4.
// create a function called logAll that will accept an array of values and console.log all of those values in a loop!

let logAll = (arr) => {
    arr.forEach(obj => console.log(obj));
}

logAll(['pizza', 'beer', 'coffee']);

// 5.
// create a function called "square", that will accept a single parameter, which is a number, and returns the square of that number
// create another function called "sumOfSquares" that will accept an array of numbers 
//      and returns the sum of all of squares of those numbers.
// requirement: sumOfSquares must invoke square at some point in its body!

let square = (val) => {
    return val**2;
}
let sumOfSquares = (arr) => {
    arr.forEach((obj, i) => arr[i] = square(obj));
    return arr;
}
console.log(sumOfSquares([5,7,3,6,4,-4,2,1,0,-6]));

// 6. 
// create a function called logBirthdays that has a single parameter called people:
// "<username> was was born on <birthday>"
// perform this task foreach person of people
// *hint* people is an array and you can see the declaration of it in data.js

let logBirthdays = (people) => {
    people.forEach(person => console.log(`${person.username} was born on ${person.birthday}`));
}
logBirthdays(people);

// 7.
// modify the function from challenge 6 to add all of those strings to an array and return the array!
let logBirthdaysToArr = (people) => {
    let statementArr = [];
    people.forEach(person => statementArr.push(`${person.username} was born on ${person.birthday}`));
    return statementArr;
}
console.log(logBirthdaysToArr(people));

// 8. (BONUS if you can complete in class, Homework if you cannot)
// create a function that accepts the "people" variable
// the function should return a brand new array of objects with the following shape:
/**
 * {
 *      name: "<the_persons_username>",
 *      currentAddress: "<their_current_address>",
 *      postalCode: "<the_postal_code",
 *      moveIn: <the_date_they_moved_in>
 * }
 */
// save the resulting array to a variable and console log it.
// hint: you can identify the address where the moveOut date is "null"
let cleanseData = (people) => {
    let newArr = [];
    let currPersonObj = {};
    people.forEach(person => {
        currPersonObj = {};
        person.addresses.filter(address => ! address.moveOut).forEach(address => {
            currPersonObj.name = person.username;
            currPersonObj.currentAddress = address.street;
            currPersonObj.postalCode = address.postalCode;
            currPersonObj.moveIn = address.moveIn;
        });
        newArr.push(Object.assign(currPersonObj, currPersonObj));
    });
    return newArr;
}

console.log(cleanseData(people));