let account_no = 45632532;
let account_type = "saving";

function withdraw(){
    console.log("Account withdraw function called...");
}

function deposit(){
    console.log("Balance updated...");
}

export default function(){
    console.log("account default function called...");
}

export {withdraw, deposit}