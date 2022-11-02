let person1 = {};

console.log(person1);

let person2 = {
    name: 'John'
};

function Person(n){
    this.name = n;
}

let person3 = new Person("ajeet");

function Person1(first, last, a){
    this.firstName = first;
    this.lastName = last;
    this.age = a;
}

Person1.prototype.fullName = function(){
    console.log(this.firstName + " " + this.lastName);
}

let person4 = new Person1("vishwajeet", "kumar", 28);
let person5 = new Person1("jeet", "kumar", 22);

function Creature(ls){
    this.lifeSpan = ls;
}

Creature.prototype.breath = function(){
    console.log("breathing...");
}

let creature1 = new Creature(100);

Person1.prototype.__proto__ = Object.create(Creature.prototype);

console.log(person1);
console.log(person2);
console.log(person2.hasOwnProperty('name'));
console.log(person2.hasOwnProperty('age'));
console.log(person3);
console.log(person4);
console.log(person4.fullName);
console.log(person5);
console.log(person5.fullName);
console.log(creature1);
console.log(person5.breath());