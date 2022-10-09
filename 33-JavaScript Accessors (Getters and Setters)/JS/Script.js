var person = {
    Name: 'John',
    age: 34,
    getName: function() {
        return this.Name.toUpperCase();
    },
    get getName1 (){
        return this.Name.toUpperCase();
    },
    set setName (n){
        this.Name = n.toUpperCase();
    }
};

console.log(person);
console.log(person.Name);
console.log(person.age);

console.log(person.Name.toUpperCase());

console.log(person.getName());

console.log(person.getName1);

person.Name = "jau";

console.log(person);