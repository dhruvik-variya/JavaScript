let users=[]


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
        td2.innerHTML = users[i].email
        let td3 = document.createElement("td")
        td3.innerHTML = users[i].role
        let td4 = document.createElement("td")
        td4.innerHTML = users[i].Expirience

        // level
        let td5 = document.createElement("td")
        if(users[i].Expirience > 5){
             td5.innerHTML = "senior"
        }
        else{
              td5.innerHTML = "junior"
        }


        let td6 = document.createElement("td")
        td6.innerHTML = users[i].salary

        tr.append(td,td1, td2, td3, td4, td5, td6)
        document.getElementById("tbody").append(tr)
     }
}


const handleData = (e) =>{
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let role = document.getElementById("role").value;
    let Expirience = document.getElementById("Expirience").value;
    let salary = document.getElementById("salary").value;

    let user = {
        name: name,
        email: email,
        role: role,
        Expirience: Expirience,
        salary: salary
    }

    users.push(user);
    console.log(users);
    uiMaker();
}

document.getElementById("userData").addEventListener("submit", handleData);