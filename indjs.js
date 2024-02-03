document.getElementById('but').addEventListener('click', function (event) {
    event.preventDefault();
    const text = document.getElementById('area').value;
    savePost(text);
});
document.querySelector('.posts').addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('like')) {
        toggleLikeImage(target);
    }
    if (target.id === 'delete') {
        const isConfirmed = confirm('Are you sure you want to delete this post?');
        if (isConfirmed) {
            deletePost(target.closest('.post1'));
        }
    }
});
const posts = document.querySelector('.posts');
document.addEventListener('DOMContentLoaded', function () {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts.forEach(function (text) {
        click(text);
    });
});
function toggleLikeImage(element) {
    if (element.src.includes('https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679')) {
        element.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455'; 
    } else {
        element.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679';
    }
}
function click(text) {
    console.log('Button clicked');
    console.log(text);
    var newPost = document.createElement("div");
    newPost.innerHTML = `
        <div class="post1">
            <div class="profile">
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="profile_image" >
            </div>
            <div id="name">
                <h6 >@Samrudh</h6>
            </div>
            <div id="writt">
                <p>${text}</p>
            </div>
            <div class="react">
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="like" class="like">
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="comment" id="comment">
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="edit" id="edit">
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="delete" id="delete">
            </div>
        </div>`;

    posts.appendChild(newPost);
}
function deletePost(postElement) {
    postElement.remove();
    updateLocalStorage();
}
function savePost(text) {
    click(text);
    saveToLocalStorage(text);
}
function saveToLocalStorage(text) {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts.push(text);
    localStorage.setItem('posts', JSON.stringify(savedPosts));
}
function updateLocalStorage() {
    const postsTexts = Array.from(document.querySelectorAll('.writt p')).map(p => p.textContent);
    localStorage.setItem('posts', JSON.stringify(postsTexts));
}
