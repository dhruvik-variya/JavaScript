
let printNameAndAge = () => {


    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value; 

    console.log(name);
    console.log(typeof name);
    console.log(age);
    console.log(typeof age);

    document.getElementById('result1').innerHTML=`name : ${name}`;
    document.getElementById('result2').innerHTML=`age  : ${age}`;
    
}