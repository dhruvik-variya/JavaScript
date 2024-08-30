let squareIt = () => {
   
    let number = document.getElementById("number").value;


    let squareIt = number * number;

    document.getElementById('result').innerHTML=`${squareIt}`;
}
