
function * genb() {
    return 1000;
    yield 100;
    yield {};
    yield yield;
}

let a = genb();
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());

console.log("***********************\n");

let b = function *() {
    for (let i of [1,2,3,4,5]){
        return i;
        //yield i;
    }
}

console.log(b().next());

class User{
    *c(){
        yield "es6";
    }
}
console.log("***********************\n");
let u = new User();
console.log(u.c().next());
console.log("***********************\n");

let d = (new class{
    *test(){
        yield "hello,world";
    }
}).test().next();

console.log(d);

function *e() {
    yield "a";
    yield u.c();
    yield "b";
    yield genb();
}
console.log("***************555666********\n");
let f = e();
// console.log(f.next());
// console.log(f.next().value.next());
// console.log(f.next());
// console.log(f.next().value.next());
// console.log(f.next());
// for (let x of f){
//     console.log(x);
// }


console.log([...f]);

console.log([..."hello"].length);