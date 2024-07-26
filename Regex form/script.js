const handledata = (e) => {
    e.preventDefault();
  
    let data = {
      username: document.getElementById("name").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      password: document.getElementById("password").value,
    };

    const form =document.getElementById("userdata");

    // for user name
    let regexname = /^[A-Z][a-zA-Z0-9]{2,}$/;
    if (!regexname.test(data.username)) {
        alert('Username should be at least 2 characters long');
        data.username.classList.Remove("Box"); 
        return;
    }
    else{
        // data.username.style.border = "5px solid red";
        data.username.classList.add("Box");
    }


    // for number
    let regexNumber =  /^(?:\+91|91)?[6789]\d{10}$/;
    if (!regexNumber.test(data.number)) {
      alert("Phone number should be at least 10 digits long");
      data.number.style.color = "red"
      return;
    }

    // for password
    let regexpassword = /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{6,}$/
    if (!regexpassword.test(data.password)) {
        alert("Password should be at least 6 characters long");
        return;
    } 
    
    console.log(data);
  };
  
  document.getElementById("userdata").addEventListener("submit", handledata);