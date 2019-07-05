/**
 * Challenge 1.
 * Use the JSON Placeholder API to GET all Posts
 * URL = https://jsonplaceholder.typicode.com/posts
 * render them out to the page using the provided createPost function!
 * 
 * - create a fetch request with the URL provided
 * - cast the response to json
 * - in the result console.log the result
 *      - what do you see? (you should see an array)
 * - loop over each result and pass each object into the `createPost` function
 * - check the page!
 *      - you have succeeded if you see a list of 100 posts!
 */

//  const result = async () => {
//     const postFetch = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await postFetch.json();
//     console.log(posts);
//     posts.forEach(post => createPost(post));
// };

// result();



/**
 * Challenge 2.
 * comment out the previous code and make a GET for all of posts by user 3
 * URL = https://jsonplaceholder.typicode.com/posts
 * query params = {userId: 3}
 * 
 * - start by creating a new URL
 *      - `const url = new URL('https://jsonplaceholder.typicode.com/posts');`
 * - since we have query parameters we will need to add those
 *      - `url.search = new URLSearchParams({userId: 3});`
 * - now that we have an assembled URL let's make our fetch request!
 * - begin our fetch request with `fetch(url)`
 * - cast the response to json
 * - our second `.then(...)` is going to be exactly what we had from the previous question!
 * - this time, we should see a much smaller set of posts!
 */

const url = new URL('https://jsonplaceholder.typicode.com/posts');
// url.search = new URLSearchParams({userId: 3});

// const postsFromUser = fetch(url)
//     .then(res => res.json())
//     .then(posts => posts.forEach(post => createPost(post)));



/**
 * Challenge 3.
 * comment out the previous code and make a POST request to create a new post!
 * Unfortunately, you will not get a full object back so you can just console.log the result
 * 
 * URL = https://jsonplaceholder.typicode.com/posts
 * data = { title: 'foo', body: 'bar', userId: 1 }
 * method: POST
 * headers: { 'Content-Type': 'application/json' }
 * 
 * hint: don't forget to use JSON.stringify!
 * 
 * - create a fetch request, this time add the configuration object as the 2nd argument.
 * - configure the HTTP request
 *      - switch the HTTP method to POST
 *      - add the headers section and set the Content-Type to application/json
 *      - create the data object (don't forget to use JSON.stringify)
 *          - use the object from the instructions above
 * - cast the response to json
 * - you can console log the result
 *      - you should see a result in the console!
 */

//  const postFinder = fetch(url, {
//      method: 'POST',
//      data: JSON.stringify({
//          title: 'foo',
//          body: 'bar',
//          userId: 1
//      }),
//      headers: {
//          'Content-Type': 'application/json'
//      }
//  }).then(
//     res => res.json()
//  ).then(
//     res => console.log(res)
//  )


/**
 * Challenge 4.
 * we're going to refactor the code from Challenges 1 & 2 into something sleeker
 * 
 * - Let's take inventory of what we have here!
 *      - A fetch request
 *      - A cast to json
 *      - A loop that creates elements
 *      - In the second request, we also have optional parameters
 * - Let's start by encapsulating our common logic!
 * - create a function, called request, which has two parameters:
 *      - url: which is a string which should be our url
 *      - params: an object which represents our query parameters
 * - inside this function we should create a new URL object
 *      - `new URL(url);`
 *      - save it to a variable
 * - we should conditionally add our parameters to the `search` property of our url variable
 *      - the condition should check if we have a params object present in the function
 *      - inside the condition:  `<your_url_variable>.search = new URLSearchParams(params);`
 * - finally we should return our fetch request with our prepared url
 *      - don't forget to cast the response so you don't need to do it outside of the function.
 * 
 * - Let's test this out!
 * - call the function and supply it's necessary arguments 
 *      - request('https://jsonplaceholder.typicode.com/posts).then(...)
 *      - you can just console log the results in side your .then
 *          - you should see the all 100 posts in the console
 * - call the function again and supply it's necessary arguments 
 *      - request('https://jsonplaceholder.typicode.com/posts, { userId: 4 }).then(...)
 *      - you can just console log the results in side your .then
 *          - you should see just 10 posts in the console.
 */

const request = (url, params) => {
    const thisUrl = new URL(url);
    if(params) thisUrl.search = new URLSearchParams(params);
    return fetch(thisUrl)
        .then(res => res.json());
}

request('https://jsonplaceholder.typicode.com/posts').then(data => console.log(data));

request('https://jsonplaceholder.typicode.com/posts', { userId: 4 }).then(data => console.log(data));