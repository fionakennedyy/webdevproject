async function getPosts(e) {
    const response = await fetch('http://localhost:3000/post/getPosts', {
        method: 'GET',
    });
    return await response.text();
}
console.log( await getPosts() );