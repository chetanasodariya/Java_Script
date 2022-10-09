let person = {
    firstName: 'chetan',
    lastName: 'asodariya'
};

console.log(person);

console.log(person.firstName);

console.log(person.lastName);

console.log(person['firstName']);

console.log(person['lastName']);

console.log(person.age);

person.firstName = 'John';

console.log(person.firstName);

person.age = 55;

console.log(person);

delete person.lastName;

console.log(person);

console.log(person.height);

console.log('height' in person);

console.log('age' in person);

for (let key in person) {
    console.log(key);
}

for (let key in person) {
    console.log(key + ": " + person[key]);
}