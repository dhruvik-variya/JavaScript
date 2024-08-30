function checkOddOrEven() {
    
    let number = document.getElementById("numberInput").value;

    if (number % 2 == 0) {
        document.getElementById("result").innerHTML = "this number is even";
    } else {
        document.getElementById("result").innerHTML = "this number is odd";
    }

}
