const check = () => {
  let num1 = document.getElementById("num1").value;

  if (num1 % 3 == 0) {
    document.getElementById("result").innerHTML = "Yes";
  } else {
    document.getElementById("result").innerHTML = "No";
  }
};
