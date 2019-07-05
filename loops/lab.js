// print out the numbers 1 to 10000
for(let i = 1; i <= 10000; i++) {
    console.log(i);
}

// complete the fizzbuzz challenge!
/**
 * print the numbers 1 - 100
 * if the number is divisible by 3 write 'fizz' beside it
 * if the number is divisible by 5 write 'buzz' beside it
 * if the number is divisible by 3 AND 5 write 'fizzbuzz' beside it
 */
for(let i = 1; i <= 100; i++) {
    let output = i;
    if(!(i % 3)) output += 'fizz';
    if(!(i % 5)) output += 'buzz';
    console.log(output);
}

// print each book from the array of books
let books = ["book1", "book2", "book3"];
for(let book of books) {
    console.log(book);
}

// print the release date in ISO form for each member of the array
const movies = [
    {
        title: 'Avengers: Endgame',
        releaseDate: new Date('2019-05-25')
    },
    {
        title: 'Avengers: Infinity War',
        releaseDate: new Date('2018-05-23')
    },
    {
        title: 'Black Panther',
        releaseDate: new Date('2018-02-25')
    }
];

movies.forEach(val => console.log(val.releaseDate.toISOString()));

// (bonus) complete the last one but for..of loop instead!

for(let movie of movies) {
    console.log(movie.releaseDate.toISOString());
}

// (double bonus) complete the last one but use the Array.forEach() instead!

movies.forEach(val => console.log(val.releaseDate.toISOString()));