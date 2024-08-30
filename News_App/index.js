const user = JSON.parse(localStorage.getItem("user"));

document.getElementById("profile-image").src = user.imageUrl;
document.getElementById("profile-name").textContent = `Name: ${user.name}`;

const newsList = JSON.parse(localStorage.getItem("newsList")) || [];
const newsListElement = document.getElementById("newsList");

newsListElement.innerHTML = ""; 
newsList.map((news, index) => {
  const newstitle = document.createElement("h3");
  newstitle.innerHTML = news.title;

  const newsimg = document.createElement("img");
  newsimg.src = news.newsimg;

  const newscontent = document.createElement("p");
  newscontent.textContent = news.content;

  const btnDlt = document.createElement("button");
  btnDlt.innerHTML = "Delete";
  btnDlt.addEventListener("click", () => handleDelete(index));


  let div = document.createElement("div");
  div.className="newsList"
  div.append(newstitle, newsimg, newscontent, btnDlt);
  newsListElement.append(div);
});

const handleDelete = (index) => {
  newsList.splice(index, 1);
  localStorage.setItem("newsList", JSON.stringify(newsList));
};
