/**
 * create a function called `forEach` that has two parameters
 *      - array
 *      - callback
 *
 * the function should loop through the array and invoke the callback for each item of the array
 * additionally the callback should accept each item of the array as its argument
 *
 */
let forEach = (arr, callback) => {
  for(let item of arr) {
    callback(item);
  }
}

/**
 * test out your forEach function with the following array!
 * in your callback, print out an object that has the following properties:
 *      - title: just the title straight up!
 *      - releaseDate: as a local date string!
 *
 * *remember* this will be run for each item in the array!
 */

 let arr = [
   {
     title: "title 1",
     releaseDate: new Date('2018-05-23')
   },
   {
     title: "title 2",
     releaseDate: new Date('2018-05-24')
   },
   {
     title: "title 3",
     releaseDate: new Date('2018-05-25')
   }
 ];

 forEach(arr, console.log);


/**
 * write an invocation for the following function and pass your forEach function as the callback!
 * for the innerCallback, print just the title of the book!
 *
 * take note, this is what callback hell looks like! ;P
 */

let myFunction = () => {
  forEach(arr, console.log);
};

myFunction();
