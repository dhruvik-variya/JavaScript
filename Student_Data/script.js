let users=[]; 

// for delete

const handleDelete = (index) => {
    users.splice(index, 1);
    uiMaker();  
  }

const uiMaker=() =>{
    document.getElementById("tbody").innerHTML = ""

     for(let i=0; i<users.length; i++) {

        let tr = document.createElement("tr")

        // sr no.
        let td = document.createElement("td")
        td.innerHTML=i+1

        let td1 = document.createElement("td")
        td1.innerHTML = users[i].name 

        let td2 = document.createElement("td")
        td2.innerHTML = users[i].grid

        let td3 = document.createElement("td")
        td3.innerHTML = users[i].course

        let td4 = document.createElement("td")
        td4.innerHTML = users[i].fees

        let td6 = document.createElement("td")
        td6.innerHTML = users[i].number    

        let td7 = document.createElement("td")
        td7.innerHTML="Remove"
        td7.addEventListener("click", () => handleDelete(i))

        tr.append(td,td1, td2, td3, td4, td6,td7)
        document.getElementById("tbody").append(tr)
     }
}

const handleData = (e) =>{
    e.preventDefault();

    let user = {
        name : document.getElementById("name").value,
        grid : document.getElementById("grid").value,
        course : document.getElementById("course").value,
        fees : document.getElementById("fees").value,
        number : document.getElementById("number").value,
    };
  
    if(user.name.length < 2) {
        alert('Username should be at least 2 characters long');
        return;
    }

    if(user.grid.length < 4) {
        alert('GRID should be at least 4 characters long');
        return;
    }

    if(user.number.length !=10) {
        alert('Number should be at least 10 digits long');
        return;
    }

    users.push(user);
    console.log(users);
    uiMaker();



    
 
}



document.getElementById("studentdata").addEventListener("submit", handleData);
document.getElementById("Delete").addEventListener("click",Delete)