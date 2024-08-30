let newsList = JSON.parse(localStorage.getItem("newsList")) || [];

document.getElementById("news-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const news = {
    title: document.getElementById("title").value,
    newsimg: document.getElementById("newsimg").value,
    content: document.getElementById("content").value,
  };

  newsList.push(news);
  localStorage.setItem("newsList", JSON.stringify(newsList));

  alert("News added successfully!");
  console.log("added");

  window.location.href = "index.html";
});
