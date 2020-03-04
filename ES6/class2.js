class User{
    constructor(){
        this._name="jack";
    }
    say(){
        User.show();
        console.log("i am saying");
    }

    static show(){
        console.log("static show"+this.name);
    }

    set name(value){
        console.log("set:+"+value);
        this._name = value;
    }

    get name(){
        return this._name;
    }

    static set age(age){
        User._age = age;
    }

    static get age(){
        return User._age;
    }
}

//(new User())['say']();
// (new User()).name="baba";

let user = new User();
user.name = "lucy";
console.log(user.name);

//console.log("****************\n");
//user.age=100;
//console.log(user.age);

User.age=200;
console.log(User.age);
// console.log((new User()).name);

// console.log((new User).name);
// console.log(User.name);
// console.log(User);
//
// User.age = 100;
// User['talk'] = ()=>{
//   console.log("我草");
// };
//
// console.log(User.age);
// console.log(User.talk());
//
// console.log("******************\n");
// (new User()).say();
// (new User())['say']();
// User['talk']();
//
// console.log("------------------\n");
// User.show();
// User['show']();