const handledata = (e) => {
    e.preventDefault();

  
    let data = {
      username: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      number: document.getElementById("number").value,
    };

    console.log(data);

    // for user name 

    let regexname = /^[a-zA-Z\-]+$/ ;
    if (!regexname.test(data.username)) {  
        document.getElementById("name").classList.remove("valid"); 
        document.getElementById("name").classList.add("invalid"); 
      
    }
    else{  
        document.getElementById("name").classList.remove("invalid");
        document.getElementById("name").classList.add("valid");
    }

    //  for password
     let regexpassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
     if (!regexpassword.test(data.password)) { 
        document.getElementById("password").classList.remove("valid"); 
        document.getElementById("password").classList.add("invalid"); 
     } 
     else{
      console.log(true);
      document.getElementById("password").classList.remove("invalid"); 
      document.getElementById("password").classList.add("valid"); 
     }


    // for number
    let regexNumber =  /^[0]?[789]\d{9}$/;
    if (!regexNumber.test(data.number)) { 
      document.getElementById("number").classList.remove("valid"); 
        document.getElementById("number").classList.add("invalid"); 
    }
    else{
      document.getElementById("number").classList.remove("invalid"); 
      document.getElementById("number").classList.add("valid"); 
    }

    
  };
  
  document.getElementById("userdata").addEventListener("submit", handledata);