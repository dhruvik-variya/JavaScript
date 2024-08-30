let likeCount = Number(localStorage.getItem("likeCount") || 0);
const likeCountdiv = document.getElementById("Likediv");
likeCountdiv.innerHTML = likeCount;

document.getElementById("like").addEventListener("click", () => {
  likeCount ++;
  likeCountdiv.innerHTML = likeCount;
  localStorage.setItem("likeCount", likeCount);
});


let CommentCount = Number(localStorage.getItem("commentCount")|| 0);
const commentCountdiv = document.getElementById("Commentdiv");
commentCountdiv.innerHTML = CommentCount;

document.getElementById("comment").addEventListener("click", () => {
  CommentCount ++;
  commentCountdiv.innerHTML = CommentCount;
  localStorage.setItem("commentCount", CommentCount);
});


let shareCount = Number(sessionStorage.getItem("share")|| 0);
const shareCountdiv = document.getElementById("Sharediv");
shareCountdiv.innerHTML = shareCount;

document.getElementById("share").addEventListener("click", () => {
  shareCount++;
  shareCountdiv.innerHTML = shareCount;
  sessionStorage.setItem("share", shareCount);
});


let saveCount = Number(sessionStorage.getItem("SaveCount")|| 0);
const saveCountdiv = document.getElementById("Savediv");
saveCountdiv.innerHTML = saveCount;


document.getElementById("save").addEventListener("click", () => {
  saveCount ++;
  saveCountdiv.innerHTML = saveCount;
  sessionStorage.setItem("SaveCount", saveCount);
});