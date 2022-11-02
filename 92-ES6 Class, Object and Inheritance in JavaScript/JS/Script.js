class person{
    constructor(n, a){
        this.name = n;
        this.age = a;
    }

    sayHi(){
        console.log("Hi...");
    }

    static sproperty = "something";

    static hello(){
        console.log("Hello...");
    }
}

let person1 = new person("jeet", 26);

console.log(person1);

person1.sayHi();

person1.hello();

person.hello();

console.log(person1.sproperty);

console.log(person.sproperty);


class emp{
    constructor(n){
        this.name = n;
    }

    msg(){
        console.log("Hi..");
    }
}

class manager extends emp {
    constructor(p, d){
        super(p);
        this.department = d;
    }

    msg(){
        console.log("Hi..");
    }

    info(){
        this.msg();
        super.msg();
        console.log(this.name + " is manager of department " + this.department);
    }
}

class admin extends manager {

}

let mng1 = new manager("jeet", "web development");

let admin1 = new manager("jeet", "web development");

console.log(mng1);

console.log(mng1.msg());

console.log(mng1.info());

console.log(admin1);

class employ{
    #name = "";
    constructor(n){
        this.#name = n;
    }

    #getName(){
        console.log(this.#name);
    }

    pubfun(){
        this.#getName();
    }
}

let employ1 = new employ("jeet");

console.log(employ1.pubfun());

let usefullMethod = {
    sayHi(){
        console.log("Hi..");
    },

    sayBay(){
        console.log("Bay...");
    }
};

class user{
    constructor(){
        this.name = "jeet";
    }
}

class ad extends user{

}

Object.assign(user.prototype, usefullMethod);

Object.assign(ad.prototype, usefullMethod);

let usr1 = new user();

let ad1 = new ad();

console.log(usr1);

console.log(usr1.sayHi());

console.log(usr1.sayBay());

console.log(ad1);

console.log(ad1.sayHi());

console.log(ad1.sayBay());