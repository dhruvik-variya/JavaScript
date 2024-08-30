let user = JSON.parse(localStorage.getItem("user")) || [];

document.querySelector("signup-form").addEventListener("submit", handledata);

function handledata(e) {

    e.preventDefault();

    let data ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    user.push(data);
    localStorage.setItem("user", JSON.stringify(user));
    alert("User registered successfully!");
    
     
    window.location.href = "../Pages/login.html";
}