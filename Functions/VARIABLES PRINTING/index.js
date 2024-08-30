
let number = () => {

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    console.log(num1);
    console.log(num2);

    document.getElementById('result1').innerHTML=`Var 1 : ${num1}`;
    document.getElementById('result2').innerHTML=`Var 2 : ${num2}`;


}