function sayHello(){
    console.log("Hello...");
}

function sayHi(){
    console.log("Hi...");
}

function add(num1, num2, callback){
    console.log(num1 + num2);
    callback();
}

let a = 10;

let b = 20;

let c = 30;

let d = 40;

let e = 50;

let f = 60;

add(a, b, sayHello);

add(c, d, sayHi);

add(e, f, function(){
    console.log("Bay...");
});