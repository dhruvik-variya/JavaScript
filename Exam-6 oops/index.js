class Book {
    #title
    #author
    #price
    #rentalprice
    #availableCopies
    constructor(title, author, price,rentalprice,availableCopies) {
        this.#title = title;
        this.#author = author;
        this.#price = price;
        this.#rentalprice = rentalprice;
        this.#availableCopies = availableCopies;
    }

    getname(){
        return this.#author;
    }

    setname(author){
        this.#author = author;
    }
    
    getprice(){
        return this.#price;
    }
    
    setprice(){
        this.#price = price;
    }
    
    getrentalprice(){
        return this.#rentalprice;
    }

    setrentalprice(){
        this.#rentalprice = rentalprice;
    }
    
    getavailableCopies(){
        return this.#availableCopies;
    }

    setavailableCopies(){
        this.#availableCopies = availableCopies;
    }
    details() {
        return `Title: ${this.#title}, Author: ${this.#author}, Price: ${this.#price}, Rental Price: ${this.#rentalprice}, Available Copies: ${this.#availableCopies}`;
    }
    
    buyBook() {
        if(this.#availableCopies > 0){
            this.#availableCopies--;
            console.log(`${this.#title} has been bought. Available copies: ${this.#availableCopies}`);
        }
        else {
            console.log(`${this.#title} is not available for purchase.`);
        }
    }

    
     rentBook() {
        if (this.#availableCopies > 0) {
            this.#availableCopies--;
            console.log(`${this.#title} has been rented. Available copies: ${this.#availableCopies}`);
        }
        else {
            console.log(`${this.#title} is not available for rent.`);
        }
     }
        
    returnBook() {
        this.#availableCopies++;
        console.log(`${this.#title} has been return`);
        
    }
     

    availableBook() {
        console.log(`${this.#title} has been available`);
        
    }
     

    checkBook() {
        if (this.#availableCopies < 0) {
            console.log(`${this.#title} book is low on stock.`);
        } else {
            console.log(`${this.#title} book is in stock.`);
        }
    }
    
}

let Book1 = new Book("satyna prayogo", "Gandhi Ji" ,999, 499, 5);


console.log(Book1.getname());

Book1.setname("bhagat singh");

console.log(Book1.getname());


console.log(Book1.details());

Book1.availableBook();

Book1.buyBook();

Book1.checkBook();

Book1.rentBook();

Book1.returnBook();