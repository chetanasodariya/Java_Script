function Student (first, last, age, cls){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}

let student1 = new Student("chetan", "Kumar", "22", "10");
let student2 = new Student("jay", "Kumar", "23", "5");
let student3 = new Student("raj", "Kumar", "24", "4");

console.log(student1, student2, student3);

student1.nationality = "Indian";

console.log(student1);

student1.name = function(){
    return this.firstName + " " + this.lastName;
}

console.log(student1.name());