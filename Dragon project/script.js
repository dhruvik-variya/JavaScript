let user = [];

function handledata(e){

    e.preventDefault();

    const data = {
        productimg : document.createElementById("Image").value,
        productpname : document.createElementById("Name").value,
        productprice : document.createElementById("Price").value, 
    }
    
    if(!productimg || !productpname || !productprice){
        alert("Please fill all details");
        return;
    }

    user.push(data);
    Uimaker();


};

const Uimaker = (e) =>{

    e.preventDefault();

    document.getElementById("products").innerHTML = "";

    for(let i = 0; i < user.length; i++){

         let image = document.createElement("img");
         image.src = user[i].image;


         let name = document.createElement("h2");
        name.innerHTML = user[i].name;

         let price = document.createElement("h3");
         price.innerHTML = "$" + user[i].price;

        

         let buy = document.createElement("button");
         buy.innerHTML = "Buy";

         let delet = document.createElement("button");
         delet.innerHTML = "Delete";
        

         let parent = document.createElement("div");

         div.append(image,name, price, buy, delet);
         document.getElementById("products").append(parent);
         delet.addEventListener("click", () => {
             user.splice(i, 1);
             Uimaker();
         });


         console.log(user[i].price);
         
    }
}




document.getElementById("form").addEventListener("submit", handledata);