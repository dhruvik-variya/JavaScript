let user = [];

function handledata(e) {
    e.preventDefault();

    const data = {
        productimg: document.getElementById("Image").value,
        productpname: document.getElementById("Name").value,
        productprice: document.getElementById("Price").value,
    }
    
    if (!data.productimg || !data.productpname || !data.productprice) {
        alert("Please fill all details");
        return;
    }

    user.push(data);
    Uimaker(); 
}

const Uimaker = () => {
    document.getElementById("products").innerHTML = "";

    for (let i = 0; i < user.length; i++) {
        let image = document.createElement("img");
        image.src = user[i].productimg;

        let name = document.createElement("h4");
        name.innerHTML = user[i].productpname;

        let price = document.createElement("h4");
        price.innerHTML = "$" + user[i].productprice;

        let buy = document.createElement("button");
        buy.innerHTML = "Buy";
        buy.addEventListener("click", () => {
            alert("Buy Successfully!")
        }); 

        let delet = document.createElement("button");
        delet.innerHTML = "Delete";

        let div = document.createElement("div");
        div.className = "product-box";

        div.append(image, name, price, buy, delet);
        document.getElementById("products").append(div);

        delet.addEventListener("click", () => {
            user.splice(i, 1);
            Uimaker();
        });

    }
}

document.getElementById("form").addEventListener("submit", handledata);
