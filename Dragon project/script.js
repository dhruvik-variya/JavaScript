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

function Uimaker(){
    document.getElementById("products").innerHTML = "";

    for(let i = 0; i < user.length; i++){

        let image = document.createElement("Image");
        let name = document.createElement("Name");
        let price = document.createElement("Price");
        let buy = document.createElement("button");
        let delet = document.createElement("button");


    
        let tr = document.createElement("tr");
        
    }
}



document.getElementById("form").addEventListener("submit", handledata);