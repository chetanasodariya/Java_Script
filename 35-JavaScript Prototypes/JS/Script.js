function Student (first, last, age, cls){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}

let student1 = new Student("chetan", "Kumar", "22", "10");
let student2 = new Student("jay", "Kumar", "23", "5");
let student3 = new Student("raj", "Kumar", "24", "4");

Student.prototype.nationality = "Indian";

console.log(student1);

console.log(student2);

console.log(student3);

console.log(student1.nationality, student2.nationality, student3.nationality);

Student.prototype.name = function(){
    return this.firstName + " " + this.lastName;
}

console.log(student1.name());
console.log(student2.name());
console.log(student3.name());