const str = (e) => {
  
    e.preventDefault();

    let str = document.getElementById("uppercase").value;
    str = str.toUpperCase();
    document.getElementById("output").innerHTML = `${str}`;
  };
  
  document.getElementById("formData").addEventListener("submit", str);