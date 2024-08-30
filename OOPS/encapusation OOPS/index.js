// creat a object with the oops

class Student{
    constructor(name, age, grid , course , fees){
        this.name = name;
        this.age = age;
        this.grid = grid;
        this.course = course;
        this.fees = fees;
    }
     leaves(){
        console.log(this.name, "you can take leave");
    }
}

let student1 = new Student("manoj", 89 , 6652 , "Full Stack" ,  150000);
let student2 = new Student("dev", 21 , 5555 , "Full Stack" , 150000);

console.log(student1);
console.log(student2);

// access the property of object from constructor
console.log(student1.name);

// call the method of object from constructor
student1.leaves();