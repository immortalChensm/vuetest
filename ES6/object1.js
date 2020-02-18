//object 对象增强  【ES6增加的静态方法】
console.log(Object.is("123","123"));
console.log(Object.is(NaN,NaN));
console.log(Object.is(undefined,undefined));
console.log(Object.is(null,null));
console.log(NaN===NaN);
let user={
    [Symbol("jack")]:"china"
};

for(let k of Object.getOwnPropertySymbols(user)){
    console.log(k);
}

Object.setPrototypeOf(user,{"age":100});
console.log(user);
console.log(user.age);
console.log(user['age']);
//console.log(user.getPropertyValue("age"));

let a={};
let b={
    "value":1000
};
Object.assign(a,b);
console.log(a);
let c={
    age:100,
    address:'beijing'
};

Object.assign(a,c);
console.log(a);