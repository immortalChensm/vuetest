class User{
    constructor(){
        console.log("i am user");
        //return {"name":"lucy"};
        this.name = "lucy";
    }

    getInfo(){
        console.log("hello,i am jack");
    }
}

let u = new User();
console.log(u);
console.log(u.getInfo());

console.log(u.name);
console.log(Object.getOwnPropertyNames(u));

// let Person = class {
//
// };
// console.log(Person);
// console.log(typeof u);
// console.log(typeof User);

let girl = new class Girl{
    constructor(name){
        this.name=name;
    }
}("tom");

console.log(girl.name);


function createObj(cla) {
    return new cla();
}

console.log(createObj(class{}));

