document.getElementById("signup-form").addEventListener("submit",   (e) => 
    {
          e.preventDefault();

          const user = {
            name: document.getElementById("name").value,
            imageUrl: document.getElementById("image-url").value,
          };

          localStorage.setItem("user", JSON.stringify(user));
          alert("Sign up successful!.");

          window.location.href = "./index.html";
        });