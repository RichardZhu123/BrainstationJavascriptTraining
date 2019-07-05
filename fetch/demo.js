const commonPostRequest = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    }).then(response => {
        return response.json();
    })
}

commonPostRequest({
    title: 'foo',
    body: 'bar',
    userId: 1
}).then(response => {
    console.log(response);
})

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(result => console.log(result));