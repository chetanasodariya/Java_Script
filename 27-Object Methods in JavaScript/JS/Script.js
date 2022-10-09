let person = {
    firstName: 'John',
    lastName: 'Kumar',
    sayHello2: function(){
        console.log('Hello');
    },
    sayHello3 (){
        console.log('Hello');
    }
}

person.age = 12;

person.sayHello = function(){
    console.log('Hello');
}

person.sayHello();

function greet(){
    console.log('Hello');
}

person.sayHello1 = greet;

person.sayHello1();

person.sayHello2();

person.sayHello3();