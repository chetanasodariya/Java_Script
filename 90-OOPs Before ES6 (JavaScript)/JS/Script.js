let person1 = {
    firstName: "chetan",
    lastName: "Bhai",
    age: 25,
    fullName: function(){
        console.log(this.firstName + " " + this.lastName)
    }
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
person1.fullName();

person1.age = 30;

console.log(person1.age);

let person2 = {};

person2.name = "Jay";

person2.sayHi = function(){
    alert("Hi");
};

console.log(person2.name);

person2.sayHi();

let person3 = new Object();

person3.name = "Raj";

person3.sayHello = function(){
    alert("Hello");
};

console.log(person2.name);

person2.sayHello();

function Person(first, last, a){
    this.firstName = first;
    this.lastName = last;
    this.age = a;

    this.sayHelloWorld = function(){
        alert("Hello World");
    };

    this.changeAge = function(newAge){
        this.age = newAge;
    }
}

let person4 = new Person("Jeet", "kumar", 12);

let person5 = new Person("Ajeet", "kumar", 22);

person4.changeAge(21);

console.log(person4);
console.log(person5);