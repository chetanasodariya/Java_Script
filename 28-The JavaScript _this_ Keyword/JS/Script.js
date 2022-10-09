let person = {
    firstName: 'chetan',
    lastName: 'asodariya',
    sayHello () {
        console.log("Hello! i am " + this.firstName + " and i have a " + car.brand + " car.");
    }
};

let car = {
    brand: 'Tata',
    model: 'Safari'
}

person.sayHello();