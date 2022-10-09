let a = new Date();

console.log(a);

let b = new Date(2018, 11, 13, 10, 33, 56, 7);

console.log(b);

let c = new Date(2018, 11);

console.log(c);

let d = new Date(2018);

console.log(d);

let e = new Date("October 13, 2018 11:12:55");

console.log(e);

console.log(e.getTime());

console.log(e.getFullYear());

console.log(e.getMonth());

console.log(e.getDate());

console.log(e.getHours());

console.log(e.getMinutes());

console.log(e.getSeconds());

console.log(e.getDay());

e.setFullYear(2020);

console.log(e);

e.setMonth(1);

console.log(e);

e.setDate(5);

console.log(e);

e.setHours(2);

console.log(e);

e.setMinutes(0);

console.log(e);

e.setSeconds(34);

console.log(e);

e.setDate(e.getDate() + 50);

console.log(e);

let f = new Date("October 13, 2018 11:12:55");

let g = new Date("October 13, 2018 11:12:55");

g.setDate(f.getDate + 50);

console.log(f);

console.log(g);

let h = new Date("October 13, 2018 11:12:55");

let i = new Date();

if (y > x){
    console.log("x is past date");
}else if(x > y){
    console.log("x is future date");
}else {
    console.log("x and y are same date");
}