const posts = [
    {title: 'Post One', body: 'this is post one'}
    {title: 'Post Two', body: 'this is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
        output += `<li>${post}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost(post){
    setTimeout(() => {
    posts.push(post);
    }, 2000);
}

getPosts();

createPost({
    title: 'post three', body: 'this is post three'
})