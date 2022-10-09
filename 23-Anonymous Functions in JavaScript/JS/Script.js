let show = function (){
    console.log("Hello world!");
};

show();

function show1 (){
    console.log("Hello world.");
}

setTimeout(show1, 3000);

setTimeout(function (){
    console.log("Hello world");
}, 4000);