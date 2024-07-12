let users=[]

const handleData = (e)=>{
    e.preventDefault(); 

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let salary = document.getElementById("salary").value;

    let user = {
        name: name,
        email: email,
        number: number,
        salary: salary
    }

    users.push(user);
    console.log(users);
}

document.getElementById("userData").addEventListener("submit", handleData);