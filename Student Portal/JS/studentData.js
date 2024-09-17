import Navbar from "../Components/navbar.js";

document.getElementById("Navbar").innerHTML = Navbar();

let data = JSON.parse(localStorage.getItem("data")) || [];

const Uimaker = ((data) => {

    document.getElementById("studentList").innerHTML = "";

    data.map((ele) => {
        let div = document.createElement("div");
        div.className = "studentList";

        let img = document.createElement("img");
        img.src = ele.img || "default-image-url.jpg";  // Added default image

        let name = document.createElement("h3");
        name.innerHTML = ele.name || "No Name";  // Fallback if name is missing

        let grid = document.createElement("h3");
        grid.innerHTML = ele.grid || "No Grid";  // Fallback if grid is missing

        let course = document.createElement("h3");
        course.innerHTML = ele.course || "No Course";  // Fallback if course is missing

        let fees = document.createElement("h3");
        fees.innerHTML = ele.fees || "No Fees";  // Fallback if fees are missing

        div.append(img, name, grid, course, fees);
        document.getElementById("studentList").append(div);
    });

});

Uimaker(data);
