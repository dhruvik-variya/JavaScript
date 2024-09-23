import Navbar from "../Components/navbar.js";

document.getElementById("Navbar").innerHTML = Navbar();

let data = JSON.parse(localStorage.getItem("data")) || [];

// search
const handleSearch = (e) => {
    e.preventDefault();
  
    let searchInput = document.getElementById("search").value;
  
    let comp = data.filter((ele) =>
      ele.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  
    Uimaker(comp);
  };
  
document.getElementById("searchBtn").addEventListener("click", handleSearch);






const Uimaker = ((data) => {

    document.getElementById("studentList").innerHTML = "";

    data.map((ele,index) => {

        let div = document.createElement("div");
        div.className = "studentList";

        let img = document.createElement("img");
        img.className="studentIMG"
        img.src = ele.img || "default-image-url.jpg";  

        let name = document.createElement("h3");
        name.innerHTML ="Name :  " + ele.name
        // name.innerHTML = ele.name || "No Name";   
        
        let grid = document.createElement("h3");
        grid.innerHTML = "Grid :  " + ele.grid;
        // grid.innerHTML = ele.grid || "No Grid";  

        let course = document.createElement("h3");
        course.innerHTML = "Course :  " + ele.course;
        // course.innerHTML = ele.course || "No Course";  

        let fees = document.createElement("h3");
        fees.innerHTML = "Fees :  " + ele.fees;
        // fees.innerHTML = ele.fees || "No Fees";  

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete"; 
        deleteBtn.className = "deleteBtn";
        deleteBtn.addEventListener("click", () => {
            data.splice(index, 1); 
            localStorage.setItem("data", JSON.stringify(data));
            Uimaker(data); 
        });
        

        div.append(img, name, grid, course, fees,deleteBtn);
        document.getElementById("studentList").append(div);
    });

});


// sortby
const handleSort = (print) => {
    if (print === "lth") {
      let comp = data.sort((a, b) => a.fees - b.fees);
      Uimaker(comp);
    } 
    else if (print === "htl") {
      let comp = data.sort((a, b) => b.fees - a.fees);
      Uimaker(comp);
    }
  };

  document.getElementById("sort").addEventListener("change", (event) => {
    handleSort(event.target.value);
  });


Uimaker(data);


