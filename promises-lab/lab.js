/**
 * A little refactoring challenge for you!
 * this code will not work at all! Let's change that!
 *
 * Your challenge here is to print out the list of products to the console!
 * - you will need to remove the product variable and wrap the setTimeout in a promise
 * - you will need to use the .then() to extract the list of products from the promise
 * - you will need to loop through the results and print the name to the console.
 */
let books = []
let bookPromise = new Promise ((resolve, reject) => {
  setTimeout(() => {
      resolve([
          { id: 1, name: 'shoe horn', price: 9.99 },
          { id: 2, name: '3 pack of towels', price: 5.99 },
          { id: 3, name: 'stone mortar and pestle', price: 13.99 },
          { id: 4, name: '4 bamboo placemats', price: 7.99 },
          { id: 5, name: '5-piece food container set', price: 20.99 },
          { id: 6, name: '10-pack plastic clothes hangers', price: 4.99 },
          { id: 7, name: 'open toe house slippers', price: 3.99 },
          { id: 8, name: 'makeup sponges', price: 5.99 },
          { id: 9, name: 'loose poweder puff', price: 4.49 },
      ]);
  }, 100);
});

bookPromise.then(obj => {
  obj.forEach(val => console.log(val.name));
});

/**
 * BONUS
 * - print the sum of all the prices in the console...
 * - using the same promise!
 */

bookPromise.then(obj => {
  console.log(obj.reduce((acc, elem) => { return acc + elem.price; }, 0)) ;
})
