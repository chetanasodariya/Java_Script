let arr = [2, 22, 13, 5, 6, 61, 23, 7];

let arr1 = arr.filter(val => val > 10);

let arr2 = arr.filter(function(val){
    return val > 10;
});

console.log(arr);
console.log(arr1);
console.log(arr2);

let team = [
    {
        name : "vishwajeet",
        position : "developer"
    },
    {
        name : "ram",
        position : "ui designer"
    },
    {
        name : "shyam",
        position : "developer"
    },
    {
        name : "tom",
        position : "content manager"
    },
    {
        name : "harry",
        position : "cto"
    },
    {
        name : "raj",
        position : "backend engineer"
    },
    {
        name : "grorge",
        position : "developer"
    }
];

let developer = team.filter(val => val.position == "developer");

console.log(developer);