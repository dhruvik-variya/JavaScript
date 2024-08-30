let users=[];
let totalsalary =Number(0);
let totalemp =Number(0);


// one by one delete
const handleDelete = (index) => {
  // alert("Delete Users  " + index)
  users.splice(index, 1);
  uiMaker(); 
}


//for delete all
const DeleteAll = () => {

  users=[];   

  document.getElementById('tbody').innerHTML = "";
  document.getElementById("totalemp").innerHTML = 0;
  document.getElementById("totalsalary").innerHTML = 0;

  uiMaker();

 }


const uiMaker=() =>{

    document.getElementById("tbody").innerHTML ="";

  let totalemployees = users.length;
  document.getElementById("totalemp").innerHTML = `TOTA EMPLOYEES : ${totalemployees}`;

  let totalSalary = 0;
  for(let i = 0; i < users.length; i++) {
    totalSalary += Number(users[i].salary);
  }

document.getElementById("totalsalary").innerHTML = `TOTAL SALARY : ${totalSalary}`;

 







    document.getElementById("tbody").innerHTML = ""

     for(let i=0; i<users.length; i++) {

        let tr = document.createElement("tr")

        //for sr no.
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

        // level job roles
        let td5 = document.createElement("td")
        if(users[i].Expirience > 0) {
          if(users[i].Expirience > 5 ){
               td5.innerHTML = "senior"
               console.log(users[i].Expirience);
          }
          else{
               td5.innerHTML = "junior"
          }
        }
        

        let td6 = document.createElement("td")
        td6.innerHTML = users[i].salary

        let td7 = document.createElement("td")
        td7.innerHTML="Remove"
        td7.addEventListener("click", () => handleDelete(i))

        tr.append(td,td1, td2, td3, td4, td5, td6, td7)
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
document.getElementById("DeleteAll").addEventListener("click",DeleteAll)