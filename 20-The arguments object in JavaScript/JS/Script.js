function add(num1, num2) {
    console.log(arguments.length)
    console.log(arguments)
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    console.log(arguments[3])
}

add(6, 8, 5);

function add1(){
    if(arguments.length == 0){
        console.log ("No arguments passed!");
    }else {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i];
        }
        console.log (sum);
    }
}

let addition = add1;

add1(5);
add1(8, 6);
add1(9, 5, 3);
addition(8, 6, 3, 4);