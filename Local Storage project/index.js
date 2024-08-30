let arr = JSON.parse(localStorage.getItem("data")) || [];

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let data = { 
    Name: document.getElementById("Name").value,
    Price: document.getElementById("Price").value,
    Quantity : document.getElementById("Quantity").value
  };

  arr.push(data);
  console.log(arr);

  localStorage.setItem("data", JSON.stringify(arr));
  ui();
});

function ui() {
  const div = document.getElementById("data");
  div.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<br><br>Name: ${arr[i].Name}<br>Price: ${arr[i].Price}<br>Quantity: ${arr[i].Quantity} <br><br>`;
    div.appendChild(newDiv);
  }
}
ui()
