import Navbar from "../Component/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let user = JSON.parse(localStorage.getItem("user")) || [];

const  handledata = (e) =>  {

    e.preventDefault();

    let data ={
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

     
    let match = user.filter(
        (ele) => ele.email == user.email && ele.password == user.password
    );
    
    if(match){
        alert("User Login successfully!");

        localStorage.setItem("username", match.name);

        localStorage.setItem("login", true)

        window.location.href = "/index.html";
    }
    else{
        alert('Invalid Email or Password');
    }    
} 

document.querySelector("#form").addEventListener("submit", handledata);