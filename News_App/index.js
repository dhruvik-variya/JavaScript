// Fetch user data from local storage and set profile image and name
const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  document.getElementById("profile-image").src = user.imageUrl;
  document.getElementById("profile-name").textContent = `Name: ${user.name}`;
}
else{
  window.location.href = "./login.html"; // Redirect to login page if user data is not found in local storage
  alert("Please Login firt and try again."); // Show an alert message to the user
}

// Fetch news list from local storage or initialize as an empty array
const newsList = JSON.parse(localStorage.getItem("newsList")) || [];

// Function to handle rendering of news items
const handleuser = (newsList) => {
  const newsListElement = document.getElementById("newsList");
  newsListElement.innerHTML = "";

  newsList.map((news, index) => {
    const newstitle = document.createElement("h3");
    newstitle.textContent = news.title;

    const newsimg = document.createElement("img");
    newsimg.src = news.newsimg;

    const newscontent = document.createElement("p");
    newscontent.textContent = news.content;

    const btnDlt = document.createElement("button");
    btnDlt.textContent = "Delete";
    btnDlt.addEventListener("click", () => handleDelete(index));

    let div = document.createElement("div");
    div.className = "newsItem"; // Use a more specific class name
    div.append(newstitle, newsimg, newscontent, btnDlt);
    
    newsListElement.append(div);
  });
};

// Function to handle delete of a news item
const handleDelete = (index) => {
  newsList.splice(index, 1);
  localStorage.setItem("newsList", JSON.stringify(newsList));
  handleuser(newsList); // Re-render the news list after deletion
};

// Initial call to render news items
handleuser(newsList);