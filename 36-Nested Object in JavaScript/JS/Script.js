var user = {
    id: 101,
    email: "abc@gmail.com",
    personalInfo: {
        name: "abc",
        address: {
            street: "dsgsgs",
            city: "Delhi",
            country: "India",
        }
    }
};

console.log(user);
console.log(user.id);
console.log(user.email);
console.log(user.personalInfo);
console.log(user.personalInfo.name);
console.log(user.personalInfo.address);
console.log(user.personalInfo.address.street);
console.log(user.personalInfo.address.city);
console.log(user.personalInfo.address.country);