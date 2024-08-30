class Student {
    #name;
    constructor(name, age, course, fees, attendance,) {

        this.#name = name;
        this.age = age;
        this.course = course;
        this.fees  = fees;
        this.attendance = attendance; 
    }

    details(){
        return `Name: ${this.name}, Age: ${this.age}, Course: ${this.course}, Fees: ${this.fees}, Attendance: ${this.attendance}`;
    }

    Examination(Student){
        if(Student.attendance > 80){
            console.log(`${Student.name} has been eligible for exam.`);
        }
        else{
            console.log(`${Student.name} has not been eligible for exam.`);
        }
    }

    leave(Student){
        console.log(`${Student.name} has left the course.`);
    }

    getname(Student){
        return this.#name;
    }

    setname(Student){
        this.#name = Student.name;
    }
    

}



 let student1 = new Student("sahil", 20, "full stck",  100000, 5);

console.log(student1.details());

student1.leave(student1);
student1.Examination(student1);  
 

// console.log(student1.getname());
