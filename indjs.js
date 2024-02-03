document.getElementById('but').addEventListener('click', function(event) {
    event.preventDefault(); 
    click(document.getElementById('area').value);
});
const posts = document.querySelector('.posts')
function click(text) {
    console.log('Button clicked');
    console.log(text)
    var newPost = document.createElement("div");
    newPost.innerHTML = `
    <div class="post1">
    <div class="profile">
        <div id="profile_image">
            <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="profile_image" >
        </div>
        <div id="name">
            <h6 >@Samrudh</h6>
        </div>
    </div>
    <div id="writt">
        <p>${text}</p>
    </div>
    <div class="react">
    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679" alt="like"  id="like">
    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619" alt="comment" id="comment">
    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="edit" id="edit">
    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="delete" id="delete">
    </div>

</div>`
    posts.appendChild(newPost)
}
const likeImage = document.getElementById('like');
let isLiked = false;
likeImage.addEventListener('click', function() {
    if (isLiked) {
        likeImage.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679';
    } else {
        likeImage.src = 'https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455';
    }
    isLiked = !isLiked;
});
