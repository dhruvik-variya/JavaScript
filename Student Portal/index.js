import Navbar from "./Components/navbar.js";

document.getElementById("Navbar").innerHTML= Navbar();

let data = JSON.parse(localStorage.getItem("data")) ||[];


const handleUi= (e)=>{
    
    e.preventDefault();

    const student = {
        img : document.getElementById("img").value,  
        name : document.getElementById("name").value,
        grid : document.getElementById("grid").value,
        course : document.getElementById("course").value,
        fees : document.getElementById("fees").value,
    };
    
    data.push(student);
    localStorage.setItem("data",JSON.stringify(data)); 

    window.location.href = "/PAGES/studentData.html";
    window.onload();
    
};

localStorage.setItem("student",JSON.stringify(data));

document.getElementById("form").addEventListener("submit",handleUi);