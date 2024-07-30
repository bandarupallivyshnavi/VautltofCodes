document.addEventListener('DOMContentLoaded', () => {
    const blogPostsContainer = document.getElementById('blog-posts');

    const posts = [
        {
            title: 'First Blog Post',
            content: 'This is the content of the first blog post.',
            image: 'img/post1.jpg',
            link: 'post1.html'
        },
        {
            title: 'Second Blog Post',
            content: 'This is the content of the second blog post.',
            image: 'img/post2.jpg',
            link: 'post2.html'
        }
    ];

    function displayPosts() {
        blogPostsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('col-md-6', 'mb-4');

            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.classList.add('card-img-top');
            img.src = post.image;
            img.alt = post.title;

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const postTitle = document.createElement('h2');
            postTitle.classList.add('card-title');
            postTitle.textContent = post.title;

            const postContent = document.createElement('p');
            postContent.classList.add('card-text');
            postContent.textContent = post.content;

            const readMoreLink = document.createElement('a');
            readMoreLink.href = post.link;
            readMoreLink.classList.add('btn', 'btn-primary');
            readMoreLink.textContent = 'Read More';

            cardBody.appendChild(postTitle);
            cardBody.appendChild(postContent);
            cardBody.appendChild(readMoreLink);

            card.appendChild(img);
            card.appendChild(cardBody);
            postElement.appendChild(card);

            blogPostsContainer.appendChild(postElement);
        });
    }

    displayPosts();
});
