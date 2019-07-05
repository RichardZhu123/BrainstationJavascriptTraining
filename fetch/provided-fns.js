
 const createElement = (tag, className, data) => {
    const element = document.createElement(tag);
    element.classList.add(className);
    if (data) element.innerText += data;
    return element;
}

const createPost = (post) => {
    const list = document.getElementById('posts');
    const article = createElement('article', 'post', null); 
    const title = createElement('h2', 'post__title', post.title);
    const user = createElement('span', 'post__user', `user: ${post.userId}`);
    const paragraph = createElement('p', 'post__body', post.body);

    // assemble the article
    article.appendChild(title);
    article.appendChild(user);
    article.appendChild(paragraph);

    // append to the list
    list.appendChild(article);
}