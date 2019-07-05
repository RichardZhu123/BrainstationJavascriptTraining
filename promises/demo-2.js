const booksPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            { id: 1, title: 'Basics of Functions in Javascript', author: 'Edwin Jackson' },
            { id: 2, title: 'Promises made, Promises Kept', author: 'Tommy Wong' },
            { id: 3, title: 'Running an Agile Team', author: 'Nicola Lochead' },
            { id: 4, title: 'Web APIs', author: 'Graeme Tilley' },
        ])
    }, 1000);
});

booksPromise.then(books => {
    for (const book of books) {
        console.log(book.title);
    }
})