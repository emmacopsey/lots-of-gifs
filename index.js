let likeCount = document.getElementById("likes")

let like = 0

function increment() {
    like += 1
    likeCount.textContent = "Likes: " + like
}