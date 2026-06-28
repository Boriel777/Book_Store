let likesMemory = [];

function toggleLikeBtn(i) {
    let likeBtn = document.getElementById(`like_btn-${i}`);
    let likeIcon = likeBtn.querySelector(`.like_icon-${i}`);
    let isLiked = likeBtn.getAttribute('aria-pressed') === "true";
    let likesNumber = document.querySelector(`.likes_number-${i}`);
    let currentLikes = parseInt(likesNumber.textContent);
    
    if (isLiked) {
        likeBtn.setAttribute('aria-pressed', "false");
        likeIcon.src = './assets/images/heart-regular-full.svg';
        likesNumber.textContent = currentLikes -1;
    } else {
        likeBtn.setAttribute('aria-pressed', "true");
        likeIcon.src = './assets/images/heart-solid-full.svg';
        likesNumber.textContent = currentLikes +1;
    }
    likesMemory[i] = {isLiked: !isLiked, currentLikes: parseInt(likesNumber.textContent) };
    saveLikesToLocalStorage();
};

function saveLikesToLocalStorage() {
    localStorage.setItem("likesMemory", JSON.stringify(likesMemory));
}

function getLikesFromLocalStorage() {
    let stringyAllLikes = JSON.parse(localStorage.getItem("likesMemory"));
    if (stringyAllLikes === null) {}
    else {likesMemory = stringyAllLikes;};
};